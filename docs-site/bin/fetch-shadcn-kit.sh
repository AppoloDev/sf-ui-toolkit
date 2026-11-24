#!/bin/sh
# Fetches the official shadcn kit of Symfony UX Toolkit (templates and theme tokens) at a pinned commit.
# The docs examples use its components (Button, Input, Switch...) the way an application that installed the kit would.
# Usage: bin/fetch-shadcn-kit.sh   (the kit lands in var/ux, which is not committed)
set -e
SHA=1ba00961f2981d6be511ef0f15737b5855dea571
DIR="$(cd "$(dirname "$0")/.." && pwd)/var/ux"
if [ ! -d "$DIR/.git" ]; then
    mkdir -p "$DIR"
    git init -q "$DIR"
    git -C "$DIR" remote add origin https://github.com/symfony/ux.git
fi
git -C "$DIR" sparse-checkout set --cone src/Toolkit/kits/shadcn
git -C "$DIR" fetch -q --depth 1 --filter=blob:none origin "$SHA"
git -C "$DIR" checkout -q "$SHA"
echo "shadcn kit at $SHA in $DIR/src/Toolkit/kits/shadcn"
