// https://nuxt.com/docs/4.x/directory-structure/app/composables
export function useCounter() {
  const counterData = reactive({
    count: 0,
  })

  const getCount = computed(() => counterData.count)

  const incCount = (amount: number) => {
    counterData.count += amount
  }

  const reset = () => {
    counterData.count = 0
  }

  // do not forget to return what you want to expose
  // use object form to allow convenient destructuring
  return {
    counterData,
    getCount,
    incCount,
    reset,
  }
}
