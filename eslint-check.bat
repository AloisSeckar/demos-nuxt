@echo off
FOR /F %%G IN (.\project-list.txt) DO (
  @echo off
  if not "%%G"=="..\nuxt-minimal" (
    echo eslint check %%G
    cd %%G
    pnpm eslint
  )
  @echo off
)
