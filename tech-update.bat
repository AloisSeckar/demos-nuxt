@echo off
FOR /F %%G IN (.\project-list.txt) DO (
  @echo off
  echo tech-update %%G
  cd %%G
  pnpm install
  pnpm audit fix
  @echo off
)
