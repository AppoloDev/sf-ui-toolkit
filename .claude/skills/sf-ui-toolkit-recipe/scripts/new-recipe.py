#!/usr/bin/env python3
"""Creates <slug>/manifest.json for a new recipe.

Usage: new-recipe.py <slug> <Name> "<description>" [--assets] [--icons] [--npm name@version ...]
  --assets  the recipe ships a Stimulus controller (copies assets/)
  --icons   the templates use Symfony UX Icons (adds symfony/ux-icons)
  --npm     JavaScript packages, pinned (name@version)
"""
import argparse, json, os, subprocess

parser = argparse.ArgumentParser()
parser.add_argument('slug')
parser.add_argument('name')
parser.add_argument('description')
parser.add_argument('--assets', action='store_true')
parser.add_argument('--icons', action='store_true')
parser.add_argument('--npm', nargs='*', default=[])
args = parser.parse_args()

root = subprocess.check_output(['git', 'rev-parse', '--show-toplevel'], text=True).strip()
directory = os.path.join(root, args.slug)
os.makedirs(directory, exist_ok=True)
copy = {'templates/': 'templates/'}
if args.assets:
    copy['assets/'] = 'assets/'
dependencies = {'composer': ['symfony/ux-icons'] if args.icons else []}
if args.npm:
    dependencies['npm'] = args.npm
manifest = {'type': 'component', 'name': args.name, 'description': args.description, 'copy-files': copy, 'dependencies': dependencies}
with open(os.path.join(directory, 'manifest.json'), 'w') as handle:
    json.dump(manifest, handle, indent=4, ensure_ascii=False)
    handle.write('\n')
print(f'{args.slug}/manifest.json written')
