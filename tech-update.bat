@echo off
FOR /F %%G IN (.\project-list.txt) DO (
  @echo off
  echo tech-update %%G
  pushd "%~dp0%%G"
  rem clean previous installation traces
  rmdir /S /Q node_modules
  del /Q pnpm-lock.yaml
  powershell -NoProfile -Command "$f = Join-Path $PWD 'pnpm-workspace.yaml'; if (Test-Path $f) { $skip = $false; $out = foreach ($l in [IO.File]::ReadAllLines($f)) { if ($l -match '^(minimumReleaseAgeExclude|overrides):') { $skip = $true; continue }; if ($skip -and $l -match '^(\s|-|$)') { continue }; $skip = $false; $l }; $t = $out -join [char]10; if ($t) { $t += [char]10 }; [IO.File]::WriteAllText($f, $t) }"
  rem fresh install
  if "%%G"=="nuxt-minimal" (
    pnpm install --ignore-scripts
  ) else (
    pnpm install
  )
  rem audit for vulnerabilities (nuxt-minimal is excluded)
  if "%%G"=="nuxt-minimal" (
    del /Q pnpm-workspace.yaml
  ) else (
    pnpm audit --prod --fix
    pnpm install
  )
  popd
  @echo off
)

rem test-app must use the same pnpm version as the demos
echo tech-update test-app
set /P first=<"%~dp0project-list.txt"
pushd "%~dp0test-app"
powershell -NoProfile -Command "$q = [char]34; $re = $q + 'packageManager' + $q + ':\s*' + $q + '[^' + $q + ']*' + $q; $pm = [regex]::Match([IO.File]::ReadAllText('%~dp0%first%\package.json'), $re).Value; $f = Join-Path $PWD 'package.json'; [IO.File]::WriteAllText($f, ([IO.File]::ReadAllText($f) -replace $re, $pm))"
rmdir /S /Q node_modules
del /Q pnpm-lock.yaml
pnpm install
popd
