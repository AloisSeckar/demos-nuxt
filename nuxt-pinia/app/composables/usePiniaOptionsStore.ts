type PiniaData = string | number | boolean

export const usePiniaOptionsStore = defineStore('pinia-options-store', {
  // default values
  // has native `$reset` function to revert into this
  state: () => {
    return {
      demoBoolean: false,
      demoNumber: -1,
      demoString: '',
      demoArray: [] as PiniaData[],
    }
  },
  // composed getters for more complex calculations WITHOUT SIDE EFFECTS
  // note: variables from state can - and should - be accessed directly on instance
  getters: {
    getDouble: (state) => {
      const num = state.demoNumber
      return () => `${num} * 2 = ${num * 2}`
    },
  },
  // methods with side effects (mutating state)
  actions: {
    fillWithRandomValues(): void {
      this.demoBoolean = true
      this.demoNumber = Math.floor(Math.random() * 100)
      this.demoString = this.demoNumber.toString()
      this.demoArray = []
      this.demoArray.push(this.demoBoolean, this.demoNumber, this.demoString)
    },
  },
})
