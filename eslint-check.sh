#!/usr/bin/env bash
set -u

root="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

while IFS= read -r name || [ -n "$name" ]; do
  [ -z "$name" ] && continue
  [ "$name" = "nuxt-minimal" ] && continue

  echo "eslint check $name"
  (
    cd "$root/$name" || exit 1
    pnpm eslint
  )
done < "$root/project-list.txt"
