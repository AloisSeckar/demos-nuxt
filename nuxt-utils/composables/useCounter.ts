export function useCounter () {
  const counterData = reactive({
    count: 0
  })

  const getCount = computed(() => counterData.count)

  const incCount = (amount: number) => {
    counterData.count += amount
  }

  const reset = () => {
    counterData.count = 0
  }

  return {
    counterData,
    getCount,
    incCount,
    reset
  }
}
