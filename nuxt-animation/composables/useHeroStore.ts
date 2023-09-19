type Coords = {
    x: number,
    y: number
}
type Direction = 'u' | 'd' | 'l' | 'r'
type Phase = 1 | 2 | 3

export const useHeroStore = defineStore({
  id: 'pinia-hero',
  state: () => {
    return {
      heroHeight: 64,
      heroWidth: 48,
      offset: { x: 48, y: 128 } as Coords,
      position: { x: 0, y: 0 } as Coords,
      direction: 'd' as Direction,
      moving: false,
      frames: 0,
      phase: 2 as Phase,
      lastKeyDown: 0,
      lastKeyUp: 0
    }
  },
  getters: {
  },
  actions: {
    init (width: number, height: number) {
      this.position.x = Math.round(width / 2 - this.heroWidth / 2)
      this.position.y = Math.round(height / 2 - this.heroHeight / 2)
    }
  }
})
