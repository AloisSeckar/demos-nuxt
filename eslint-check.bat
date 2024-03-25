@echo off

FOR /F %%G IN (.\project-list.txt) DO (
  if not "%%G"=="nuxt-minimal" (
    echo tech-update %%G
    cd %%G
    pnpm eslint
  )
)
