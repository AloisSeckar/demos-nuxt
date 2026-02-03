import type { NeonError } from 'nuxt-neon'

export default defineEventHandler(async () => {
  const { select } = useNeonServer()
  const data = await select<ExampleData>({
    columns: ['id', 'name', 'value'],
    from: 'playing_with_neon',
  })
  if (isNeonSuccess(data)) {
    return data as ExampleData[]
  }
  else {
    console.error('Error fetching data')
    console.error(formatNeonError(data as NeonError))
    return {
      name: 'NuxtNeonServerError',
      source: 'get-data API endpoint',
      code: 500,
      message: 'Failed to fetch data',
    } as NeonError
  }
})
