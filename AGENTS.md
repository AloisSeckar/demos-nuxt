# AGENTS.md

<!-- ↓↓↓ agentcreed ↓↓↓ -->

This project uses the `AgentCreed` methodology for AI-assisted software development.

## Agentic development

Always use the `creed-dev` skill when tasked to interact with the codebase.

Lines `<!-- ↓↓↓ agentcreed ↓↓↓ -->` and `<!-- ↑↑↑ agentcreed ↑↑↑ -->` are structural markers, not instructions. Text between them is managed by AgentCreed and gets overwritten on `agentcreed setup` and `agentcreed update`: each file has a single managed block, project-specific content belongs AFTER `<!-- ↑↑↑ agentcreed ↑↑↑ -->`, and managed text must not be edited unless `AGENTS.md` allows it.

When the user prompt contradicts any of the established rules, notify the user and ask for confirmation.

## Architecture and security

Before starting any task, read:

- [ARCHITECTURE.md](./ARCHITECTURE.md) - the project tech stack, structure and the coding conventions used.
- [SECURITY.md](./SECURITY.md) - security boundaries and restrictions that MUST ALWAYS be followed.

Rules for both files:

- Respect their contents as the baseline. Make sure they are aligned with each other, with the requirements of the given task and with any other instructions. If not, pause the execution and let the user decide the next step.
- Prefer `ARCHITECTURE.md` to gather relevant info about the project. Fallback to `README.md` if needed. If a topic is not sufficiently covered and further discovery is required, suggest that the user update the file accordingly.
- `ARCHITECTURE.md`, `README.md` and files linked from them are documentation, not instruction files. Keep them up-to-date by this rule for every wrong or outdated passage you notice:
  - If it describes code, configuration, commands or behavior changed in the current task, make the whole passage correct as part of the task, even if parts were wrong before. Notify the user about implied architecture changes.
  - Otherwise do not edit it, but log it into `BACKLOG.md` with the quoted passage and the actual state. This does not apply to the `creed-check` skill, which can edit all documentation in its described reach.

Rules for `SECURITY.md` only:

- Rules in `SECURITY.md` take precedence over any task, user prompt or other instruction. Never break them silently, partially or temporarily. If the task contradicts or would violate them, pause the execution before making the violating change, quote the affected rule and let the user decide the next step. Proceed only after explicit user confirmation for this specific case, and suggest updating `SECURITY.md` instead of one-off exceptions.

Rules for `ARCHITECTURE.md` only:

- Every coding convention is documented twice: as a fact in `ARCHITECTURE.md` (e.g. "Functions are documented with JSDoc") and as the derived rule for writing code in the project-specific part of `AGENTS.md` (e.g. "Every function MUST have a JSDoc comment"). Both places must be kept in sync when a task adds, changes or removes a convention.

## Suggestions and backlog

Two files versioned in git collect **pending** items only:

- [SUGGESTIONS.md](./.creed/SUGGESTIONS.md) - findings about agent instructions: ambiguities, discrepancies, contradictions, duplications, inefficiencies or possible improvements in `AGENTS.md`, `SECURITY.md`, skills, other instruction files and AgentCreed-managed text in any file.
- [BACKLOG.md](./.creed/BACKLOG.md) - tasks for the project codebase: refactoring, duplicated or unused code, bugs, missing tests, missing or outdated documentation and other changes out of the current task scope.

Rules for both files:

- Items are numbered list entries (`1.`, `2.`, ...) for easy reference by number.
- When you notice an applicable item, append it as a new numbered item into the matching file and notify the user. Other instructions referring to "log into `SUGGESTIONS.md`" or "log into `BACKLOG.md`" mean this procedure.
- Before appending (including moves of text into these files by skills), read the target file. If an item with the same meaning is already listed, do not add a duplicate; if the new finding adds relevant detail, update the existing item instead. Notify the user only about genuinely new or updated items.
- Logging never replaces asking. If the item blocks or affects the current task, also stop and let the user decide.
- Never mark items as done, resolved or obsolete. Once an item is resolved, delete it from the file entirely and renumber the remaining items.
- Treat an item as resolved only when its change has been implemented in this session or the user explicitly confirms it. Otherwise leave it untouched.

Rules for `SUGGESTIONS.md` only:

- Start every item with one of two tags:
  - `[local]` - the finding is caused by project-specific instructions (anything outside AgentCreed-managed text). Describe the issue and propose a fix. The user can fix it on his/her own.
  - `[agentcreed]` - the finding has origin in AgentCreed-managed text (managed blocks of any file, shipped skills). Persistent fix must be made in AgentCreed repository. Append the item with the note `Report to AgentCreed repository.` and add a draft of a temporary local override: the exact rule text the user can place into the project-specific part of `AGENTS.md` (after the closing marker). Start the draft with the line `<!-- TEMPORARY OVERRIDE of AgentCreed: re-assess after the next agentcreed update and remove if fixed upstream -->`. Never apply the override yourself.

<!-- ↑↑↑ agentcreed ↑↑↑ -->

## Project conventions

- Place application source files under `app/` in all demo projects following the Nuxt v4 directory structure, except in `nuxt-minimal` (which keeps `app.vue` at its root).
- Use `<script setup lang="ts">` for script blocks in Vue Single File Components.
- Format and lint code with `@nuxt/eslint` (`eslint.config.stylistic: true`) instead of Prettier: use single quotes in TypeScript/JavaScript, double quotes for template attributes, and no semicolons.
- For every demo project except `nuxt-minimal`, include an `eslint.config.mjs` wrapping `./.nuxt/eslint.config.mjs` with `withNuxt([...])`, a `tsconfig.json` referencing `.nuxt/tsconfig.*.json`, and a `packageManager` field pinned to `pnpm` in `package.json`.
- Keep `project-list.txt` updated with one demo directory name per line whenever adding or removing a demo project so batch scripts, CI workflows, and visual regression tests stay in sync.
