# ARCHITECTURE.md

<!-- ↓↓↓ agentcreed ↓↓↓ -->

This file describes the project tech stack, structure and the coding conventions used. Rules for handling this file are defined in [AGENTS.md](./AGENTS.md).

<!-- ↑↑↑ agentcreed ↑↑↑ -->

## Overview

`demos-nuxt` is a collection of various standalone Nuxt v4 demonstration projects showcasing core Nuxt features, UI frameworks, form libraries, content management, databases, schema validation, and testing, accompanied by an internal visual regression test suite (`test-app`).

The curated Vue/Nuxt news log is now maintained externally at [it-news](https://github.com/AloisSeckar/it-news/blob/main/nuxt/NuxtNews.md).

## Tech Stack

| Category | Technology |
| --- | --- |
| Language | TypeScript 6.0.x |
| Framework | Nuxt 4.6.x, Vue 3.5.x |
| Package Manager | pnpm 12.18.x (per-project lockfiles) |
| Linting & Formatting | ESLint via `@nuxt/eslint` with `stylistic: true` |
| Testing | Vitest 5 + `@nuxt/test-utils` + Playwright (`nuxt-test`), `nuxt-spec` visual regression testing (`test-app`) |
| CI/CD | GitHub Actions (Playwright container verify & baseline update workflows, Dependabot monthly updates, Combine PRs workflow) |

## Architecture

Multi-project repository (not a single shared workspace): each of the demo directories + the `test-app/` is an independent Nuxt project with its own `package.json` and `pnpm-lock.yaml` (except `nuxt-minimal`, whose `pnpm-lock.yaml` is gitignored and which omits `nuxt.config.ts`, ESLint, and `pnpm-workspace.yaml` by design).

```text
demos-nuxt/
├── project-list.txt        # Canonical list of all demo directories
├── eslint-check.{bat,sh}   # Runs `pnpm eslint` across demos (excluding nuxt-minimal)
├── tech-update.{bat,sh}    # Clean reinstall + audit across demos and test-app
├── nuxt-*/                 # 33 standalone Nuxt v4 demo projects
│   ├── app/                # Nuxt v4 app directory (all demos except nuxt-minimal)
│   ├── server/             # Nitro server routes (nuxt-api, nuxt-neon-m)
│   ├── content/            # Nuxt Content files (nuxt-content, nuxt-content3)
│   ├── test/               # Unit/E2E test examples (nuxt-test)
│   ├── public/             # Static assets
│   ├── nuxt.config.ts      # Nuxt config (all demos except nuxt-minimal)
│   ├── eslint.config.mjs   # Flat ESLint config extending .nuxt/eslint.config.mjs (all demos except nuxt-minimal)
│   ├── tsconfig.json       # Project references to .nuxt/tsconfig.*.json (all demos except nuxt-minimal)
│   └── package.json        # Independent dependencies and scripts
└── test-app/               # Internal visual regression test runner (nuxt-spec + Vitest + Playwright)
    └── test/e2e/           # Visual regression suite reading project-list.txt
```

## Key Directories

- `nuxt-minimal/`, `nuxt-simple/` - Starter templates (`nuxt-minimal` uses root `app.vue` with only `nuxt` as a dependency).
- `nuxt-pages/`, `nuxt-utils/`, `nuxt-layouts/`, `nuxt-api/`, `nuxt-middleware/`, `nuxt-plugins/`, `nuxt-time/` - Core Nuxt features and built-ins.
- `nuxt-tailwind/`, `nuxt-bootstrap/`, `nuxt-openprops/`, `nuxt-icones/`, `nuxt-fa/`, `nuxt-ui/`, `nuxt-vueform/`, `nuxt-formkit/`, `nuxt-dx/`, `nuxt-charts/` - UI, styling, icons, forms, and charting integrations.
- `nuxt-fonts/`, `nuxt-fonts-g/`, `nuxt-content/`, `nuxt-content3/`, `nuxt-image/` - Fonts, content, and image modules.
- `nuxt-pinia/`, `nuxt-supabase/`, `nuxt-neon/`, `nuxt-neon-m/` - State management (Pinia) and database/auth integrations (Supabase, Neon).
- `nuxt-valibot/`, `nuxt-zod/` - Schema validation demos.
- `nuxt-use/`, `nuxt-animation/` - VueUse utilities and animations.
- `nuxt-test/` - Example test setup using Vitest, `@nuxt/test-utils`, `@vue/test-utils`, `happy-dom`, and `playwright-core`.
- `test-app/` - Internal visual regression test app ([test-app/README.md](./test-app/README.md)) based on `nuxt-spec` that builds each demo from `project-list.txt` and compares index page screenshots against baselines.
- `.github/workflows/` - CI workflows for visual regression verification (`ci-test-verify.yml`), baseline updates (`ci-test-update.yml`), and combining Dependabot PRs (`combine-prs.yml`).

## Entry Points

- Demo apps: `nuxt-*/app/app.vue` (or `nuxt-minimal/app.vue`)
- Server API examples: `nuxt-api/server/api/`, `nuxt-neon-m/server/api/`
- Visual regression tests: `test-app/test/e2e/demos-visual.test.ts`
- Batch scripts: `eslint-check.bat` / `eslint-check.sh`, `tech-update.bat` / `tech-update.sh`

## Conventions

- All demo projects except `nuxt-minimal` use the Nuxt v4 directory structure with application source files under `app/`.
- Vue Single File Components use `<script setup lang="ts">` for script blocks.
- Linting and formatting are handled by `@nuxt/eslint` with `eslint.config.stylistic: true` (no Prettier), using single quotes in TypeScript/JavaScript, double quotes for template attributes, and no semicolons.
- Every demo project except `nuxt-minimal` defines `eslint.config.mjs` wrapping `./.nuxt/eslint.config.mjs` with `withNuxt([...])`, references `.nuxt/tsconfig.*.json` from `tsconfig.json`, and pins `packageManager` to `pnpm` in `package.json`.
- Every demo project directory is listed one per line in `project-list.txt` so batch scripts, CI workflows, and visual regression tests include it.

## Quick Commands

| Action | Command | Scope |
| --- | --- | --- |
| Install demo dependencies | `pnpm install` | Inside a demo folder (use `pnpm install --ignore-scripts` in `nuxt-minimal`) |
| Run dev server | `pnpm dev` | Inside a demo folder |
| Build demo | `pnpm build` | Inside a demo folder |
| Preview build | `pnpm start` | Inside a demo folder |
| Lint a demo | `pnpm eslint` | Inside a demo folder (excluding `nuxt-minimal`) |
| Lint all demos | `.\eslint-check.bat` / `./eslint-check.sh` | Repository root |
| Clean reinstall & audit all demos | `.\tech-update.bat` / `./tech-update.sh` | Repository root |
| Run demo unit/E2E tests | `pnpm test-once` (or `pnpm test`) | Inside `nuxt-test/` |
| Run visual regression tests | `pnpm test` (or `pnpm test-u` to update baselines) | Inside `test-app/` |
