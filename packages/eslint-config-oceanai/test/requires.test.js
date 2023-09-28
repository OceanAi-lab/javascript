'user strict'

import moduleUnderTest from '..'

describe('all entry points', () => {
  it('index does not throw', () => {
    expect(() => moduleUnderTest).not.toThrow()
  })
})
