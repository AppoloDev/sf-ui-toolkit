// Merges report/findings/*.json into report/report.md (and prints a summary). Usage: node report.mjs [dir ...]
import { readdirSync, readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs';

const dirs = process.argv.slice(2).length ? process.argv.slice(2) : ['report/findings'];
const all = [];
for (const dir of dirs) {
    if (!existsSync(dir)) continue;
    for (const file of readdirSync(dir)) if (file.endsWith('.json')) all.push(...JSON.parse(readFileSync(`${dir}/${file}`, 'utf8')));
}

const recipe = (page) => page.replace(/-\d+\.html$/, '');
const byKind = {};
for (const f of all) (byKind[f.kind] ??= []).push(f);

let md = `# Sweep report\n\n${all.length} finding(s) on ${new Set(all.map((f) => f.page)).size} preview page(s).\n\n`;
md += '| Kind | Findings | Pages |\n| --- | ---: | ---: |\n';
for (const [kind, list] of Object.entries(byKind).sort((a, b) => b[1].length - a[1].length)) {
    md += `| ${kind} | ${list.length} | ${new Set(list.map((f) => f.page)).size} |\n`;
}
for (const [kind, list] of Object.entries(byKind)) {
    md += `\n## ${kind}\n\n`;
    const byRecipe = {};
    for (const f of list) (byRecipe[recipe(f.page)] ??= []).push(f);
    for (const [name, items] of Object.entries(byRecipe).sort()) {
        md += `### ${name} (${items.length})\n\n`;
        for (const f of items.slice(0, 15)) md += `- \`${f.page}\` ${f.viewport}: ${f.detail.replaceAll('\n', ' ')}\n`;
        if (items.length > 15) md += `- … ${items.length - 15} more\n`;
        md += '\n';
    }
}
mkdirSync('report', { recursive: true });
writeFileSync('report/report.md', md);
console.log(md.split('\n').slice(0, 14).join('\n'));
