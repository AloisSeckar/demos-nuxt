export const usePiniaDemoStore = defineStore({
  id: 'pinia-demo',
  state: () => {
    return {
      demoBoolean: false,
      demoNumber: -1,
      demoString: '',
      demoArray: [] as any[]
    }
  },
  getters: {
    getDouble: (state) => {
      return () => state.demoNumber * 2
    }
  },
  actions: {
    fillWithRandomValues (): void {
      this.demoBoolean = true
      this.demoNumber = Math.floor(Math.random() * 100)
      this.demoString = this.demoNumber.toString()
      this.demoArray = []
      this.demoArray.push(this.demoBoolean, this.demoNumber, this.demoString)
    }
  }
})
