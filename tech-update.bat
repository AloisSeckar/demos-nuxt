@echo off
FOR /F %%G IN (.\project-list.txt) DO (
  @echo off
  echo tech-update %%G
  cd %%G
  rmdir /S /Q node_modules
  del /Q pnpm-lock.yaml
  pnpm install
  pnpm audit --production fix
  @echo off
)
