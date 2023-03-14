@echo off

FOR /F %%G IN (.\tech-update-list.txt) DO (
  echo tech-update %%G
  cd %%G
  npm install
  pnpm install
)
