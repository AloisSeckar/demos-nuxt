#!/usr/bin/env bash
set -u

root="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

while IFS= read -r line || [ -n "$line" ]; do
  # project-list.txt uses Windows-style relative paths (..\name) and may have CRLF endings
  line="${line//$'\r'/}"
  line="${line//\\//}"
  name="${line##*/}"
  [ -z "$name" ] && continue

  echo "tech-update $name"
  (
    cd "$root/$name" || exit 1
    rm -rf node_modules pnpm-lock.yaml

    if [ -f pnpm-workspace.yaml ]; then
      awk '
        /^(minimumReleaseAgeExclude|overrides):/ { skip = 1; next }
        skip && /^([[:space:]]|-|$)/ { next }
        { skip = 0; print }
      ' pnpm-workspace.yaml > pnpm-workspace.yaml.tmp && mv pnpm-workspace.yaml.tmp pnpm-workspace.yaml
    fi

    pnpm install
    pnpm audit --prod --fix
    pnpm install
  )
done < "$root/project-list.txt"
