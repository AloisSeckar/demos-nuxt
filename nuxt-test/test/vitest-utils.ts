// this file is being loaded before each test run
// as it is configured in ./vitest.config.mts
// it can augment or prepare your test environment

// Element.checkVisibility() is not available in Vitest
if (global.Element && !global.Element.prototype.checkVisibility) {
  global.Element.prototype.checkVisibility = function () {
  // in tests we allways just assume the element is visible
    return true
  }
}
