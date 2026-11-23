#!/bin/bash
# Commits everything as the repository owner (no attribution), pushes main and waits for the docs CI.
# Usage: ship.sh "Add Foo component"
set -e
cd "$(git rev-parse --show-toplevel)"
git add -A
git -c user.name="Fredxd" -c user.email="Fredxd@users.noreply.github.com" commit -q -m "$1"
git log --oneline -1
git push origin main 2>&1 | tail -1
sha=$(git rev-parse --short HEAD)
for i in $(seq 1 30); do
  r=$(gh api repos/AppoloDev/sf-ui-toolkit/actions/runs --jq '.workflow_runs[]|select(.head_sha|startswith("'"$sha"'"))|"\(.status) \(.conclusion)"' | head -1)
  echo "CI: $r"
  case "$r" in completed*) break;; esac
  sleep 15
done
