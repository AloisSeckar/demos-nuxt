@echo off
FOR /F %%G IN (.\project-list.txt) DO (
  @echo off
  if not "%%G"=="nuxt-minimal" (
    echo eslint check %%G
    pushd "%~dp0%%G"
    pnpm eslint
    popd
  )
  @echo off
)
