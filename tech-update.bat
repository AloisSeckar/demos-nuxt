@echo off
FOR /F %%G IN (.\project-list.txt) DO (
  @echo off
  echo tech-update %%G
  cd %%G
  rmdir /S /Q node_modules
  del /Q pnpm-lock.yaml
  powershell -NoProfile -Command "$f = Join-Path $PWD 'pnpm-workspace.yaml'; if (Test-Path $f) { $skip = $false; $out = foreach ($l in [IO.File]::ReadAllLines($f)) { if ($l -match '^(minimumReleaseAgeExclude|overrides):') { $skip = $true; continue }; if ($skip -and $l -match '^(\s|-|$)') { continue }; $skip = $false; $l }; $t = $out -join [char]10; if ($t) { $t += [char]10 }; [IO.File]::WriteAllText($f, $t) }"
  pnpm install
  pnpm audit --prod --fix
  pnpm install
  @echo off
)
