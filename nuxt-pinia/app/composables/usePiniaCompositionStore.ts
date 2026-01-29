type PiniaData = string | number | boolean

export const usePiniaCompositionStore = defineStore('pinia-composition-store', () => {
  // variables with default values
  // (state in OptionsAPI store)
  // unlike in options stores, you need to implement your own reset function
  const demoBoolean = ref(false)
  const demoNumber = ref(-1)
  const demoString = ref('')
  const demoArray = ref([] as PiniaData[])

  // complex calculations WITHOUT SIDE EFFECTS
  // (getters in OptionsAPI store)
  const getDouble = computed(() => {
    const num = demoNumber.value
    return `${num} * 2 = ${num * 2}`
  })

  // methods with side effects (mutating state)
  // (actions in OptionsAPI store)
  const fillWithRandomValues = () => {
    demoBoolean.value = true
    demoNumber.value = Math.floor(Math.random() * 100)
    demoString.value = demoNumber.value.toString()
    demoArray.value = []
    demoArray.value.push(demoBoolean.value, demoNumber.value, demoString.value)
  }

  return {
    demoBoolean, demoNumber, demoString, demoArray,
    getDouble, fillWithRandomValues,
  }
})
