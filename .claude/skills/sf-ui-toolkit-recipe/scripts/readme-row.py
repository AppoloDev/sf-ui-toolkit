#!/usr/bin/env python3
"""Adds or replaces the README row of a recipe, keeping the table sorted.

Usage: readme-row.py <slug> "<description>" [--block]
Components go in the "Component" table, blocks in the "Block" table (under "## Blocks").
"""
import argparse, subprocess

parser = argparse.ArgumentParser()
parser.add_argument('slug')
parser.add_argument('description')
parser.add_argument('--block', action='store_true')
args = parser.parse_args()

root = subprocess.check_output(['git', 'rev-parse', '--show-toplevel'], text=True).strip()
path = root + '/README.md'
lines = open(path).read().split('\n')
header = '| Block | Description | Docs |' if args.block else '| Component | Description | Docs |'
start = lines.index(header) + 2
end = start
while end < len(lines) and lines[end].startswith('|'):
    end += 1
rows = [row for row in lines[start:end] if not row.startswith('| `%s` |' % args.slug)]
rows.append('| `%s` | %s | [Documentation](https://appolodev.github.io/sf-ui-toolkit/%s.html) |' % (args.slug, args.description, args.slug))
rows.sort(key=lambda row: row.split('`')[1])
lines[start:end] = rows
open(path, 'w').write('\n'.join(lines))
print('README row written in the %s table' % ('Block' if args.block else 'Component'))
