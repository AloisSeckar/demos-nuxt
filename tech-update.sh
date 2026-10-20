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
    if [ "$name" = "nuxt-minimal" ]; then
      pnpm install --ignore-scripts
    else
      pnpm install
    fi

    # audit for vulnerabilities (nuxt-minimal is excluded)
    if [ "$name" = "nuxt-minimal" ]; then
      rm -f pnpm-workspace.yaml
    else
      pnpm audit --prod --fix
      pnpm install
    fi
  )
done < "$root/project-list.txt"

# test-app must use the same pnpm version as the demos
echo "tech-update test-app"
(
  cd "$root/test-app" || exit 1

  first="$(head -n 1 "$root/project-list.txt" | tr -d '\r')"
  pm="$(grep -o '"packageManager": *"[^"]*"' "$root/$first/package.json")"
  sed "s/\"packageManager\": *\"[^\"]*\"/$pm/" package.json > package.json.tmp && mv package.json.tmp package.json

  rm -rf node_modules pnpm-lock.yaml
  pnpm install
)
