// simple algorithm to determine whether the input is a prime number or not
// https://stackoverflow.com/a/17390131/3204544
// this function IS auto-imported and available everywhere in application
export function isPrime (input: number): boolean {
  let start = 2
  const limit = Math.sqrt(input)
  while (start <= limit) {
    if (input % start++ < 1) { return false }
  }
  return input > 1
}

// returns numbers from 1 to 9, but in JS generator style
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*
// NOTE that function* ISN'T auto-imported in current version of Nuxt (3.4.2)
export function* generateSequence () {
  let state = 1
  while (state < 10) {
    yield state
    state += 1
  }
}
