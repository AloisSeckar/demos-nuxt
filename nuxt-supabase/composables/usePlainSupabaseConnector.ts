import type { NuxtItem } from '@/db/dbTypes'

export async function usePlainSelectListOfItems (): Promise<NuxtItem[] | undefined> {
  let results
  // client can be easilly type-inferred with <T>
  await useSupabaseClient<NuxtItem>()
    // use `from` to specify table name
    .from('nuxt_items')
    // use `select` to get (specific) columns
    .select('id, name, dscr, image')
    // use `eq` to filter the results
    // .eq('column', value)
    // use `order` to sort the results
    // (notice, that test results are displayed alphabetically)
    .order('name', { ascending: true })
    // use `limit` to reduce the amount of results
    // (notice that there are 12 sample items in DB, but only 10 displayed)
    .limit(10)
    .then((data) => { results = data.data })
  return results
}

export async function usePlainSelectItem (id: number): Promise<NuxtItem | undefined> {
  let result
  // client can be easilly type-inferred with <T>
  await useSupabaseClient<NuxtItem>()
    // use `from` to specify table name
    .from('nuxt_items')
    // use `select` to get (specific) columns
    .select('id, name, dscr, image')
    // use `eq` to filter the results
    .eq('id', id)
    // use `order` to sort the results
    // .order('column', { ascending: true/false })
    // use `limit` to reduce the amount of results
    // .limit(number)
    .then((data) => { result = data.data })
  return result
}
