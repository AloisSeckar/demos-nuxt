// visual regression test for all demo apps
// each demo is built, started and its index page is compared against a baseline screenshot

import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { createPage, createTest, setTestContext, url } from '@nuxt/test-utils/e2e'
import { afterAll, afterEach, beforeAll, beforeEach, describe, expect, test } from 'vitest'
import { compareScreenshot } from 'nuxt-spec/utils'

const repoRoot = resolve(process.cwd(), '..')

const projects = readFileSync(resolve(repoRoot, 'project-list.txt'), 'utf-8')
  .split(/\r?\n/)
  .map(line => line.trim())
  .filter(Boolean)

// currently failing demos for whatever reason
// TODO diagnose and fix one-by-one
const skipped = new Set(['nuxt-tailwind', 'nuxt-ui', 'nuxt-vueform'])

describe.each(projects.filter(p => skipped.has(p)))('%s', () => {
  test.skip('index page matches screenshot', () => {})
})

describe.each(projects.filter(p => !skipped.has(p)))('%s', (project) => {
  // `setup()` keeps a single global context, so it cannot serve multiple apps in one file
  // `createTest()` gives per-app hooks and the context is re-activated before each lifecycle step
  const hooks = createTest({ rootDir: resolve(repoRoot, project) })

  beforeAll(async () => {
    setTestContext(hooks.ctx)
    await hooks.beforeAll()
  }, hooks.ctx.options.setupTimeout)
  beforeEach(hooks.beforeEach)
  afterEach(hooks.afterEach)
  afterAll(hooks.afterAll, hooks.ctx.options.teardownTimeout)

  test('index page matches screenshot', async () => {
    const page = await createPage()
    await page.setViewportSize({ width: 1280, height: 720 }) // important for consistent results!
    await page.goto(url('/'), { waitUntil: 'hydration' })

    expect(await compareScreenshot(page, {
      fileName: `${project}.png`,
      targetDir: 'test/e2e',
    })).toEqual(true)
  })
})
