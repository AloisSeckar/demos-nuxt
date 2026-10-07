#!/usr/bin/env bash
set -u

root="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

while IFS= read -r name || [ -n "$name" ]; do
  [ -z "$name" ] && continue

  echo "tech-update $name"
  (
    cd "$root/$name" || exit 1

    # clean previous installation traces
    rm -rf node_modules pnpm-lock.yaml
    
    if [ -f pnpm-workspace.yaml ]; then
      awk '
        /^(minimumReleaseAgeExclude|overrides):/ { skip = 1; next }
        skip && /^([[:space:]]|-|$)/ { next }
        { skip = 0; print }
      ' pnpm-workspace.yaml > pnpm-workspace.yaml.tmp && mv pnpm-workspace.yaml.tmp pnpm-workspace.yaml
    fi

    # fresh install
    pnpm install

    # audit for vulnerabilities (nuxt-minimal is excluded)
    if [ "$name" = "nuxt-minimal" ]; then
      rm -f pnpm-workspace.yaml
    else
      pnpm audit --prod --fix
      pnpm install
    fi
  )
done < "$root/project-list.txt"
