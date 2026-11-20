# AgentCreed Backlog

<!-- ↓↓↓ agentcreed ↓↓↓ -->

This file is used to collect tasks for the project codebase discovered during development (e.g. refactoring, duplicated or unused code, bugs, missing tests, missing or outdated documentation, changes out of the current task scope). Findings about agent instructions belong in `SUGGESTIONS.md`.

This file holds pending tasks only, as a numbered list. Resolved items are deleted, never marked as done. When resolved items are deleted, the remaining items are renumbered.

<!-- ↑↑↑ agentcreed ↑↑↑ -->

1. `.github/dependabot.yml` is missing 9 of the 33 demo projects (`nuxt-charts`, `nuxt-content3`, `nuxt-fonts-g`, `nuxt-neon-m`, `nuxt-test`, `nuxt-time`, `nuxt-valibot`, `nuxt-vueform`, `nuxt-zod`). Add them or confirm whether they are intentionally excluded.
2. `nuxt-tailwind/package.json` pins `vue` to `3.5.45` while all other 31 demos with `vue` pin `3.5.44`. Align versions on the next dependency update.
3. `test-app/test/e2e/demos-visual.test.ts` contains a skipped `describe.each(projects)` block (lines 16-18) directly above the active `describe.each(projects)` block. Remove it if it is leftover code.
