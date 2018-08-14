const frogJumps = require('../lib/frog-jumps.js')

describe('frogJumps', () => {
  describe('when start is equal to end', () => {
    it('should return 0', () => {
      const result = frogJumps(10, 10, 5)
      expect(result).toEqual(0)
    })
  })
  describe('when start is less than end', () => {
    it('should return the number of jumps, rounded up', () => {
      const result = frogJumps(1, 10, 5)
      expect(result).toEqual(2)
    })
  })
  describe('when start is greater than end', () => {
    it('should error', () => {
      const result = frogJumps(100, 10, 5)
      expect(result).toEqual('error')
    })
  })
  describe('when jumpLength is 0', () => {
    it('should error', () => {
      const result = frogJumps(10, 10, 0)
      expect(result).toEqual('error')
    })
  })
  describe('when jumpLength is less than 0', () => {
    it('should error', () => {
      const result = frogJumps(10, 10, -10)
      expect(result).toEqual('error')
    })
  })
  describe('when jumpLength is greater than 0', () => {
    it('should return the number of jumps, rounded up', () => {
      const result = frogJumps(0, 10, 2)
      expect(result).toEqual(5)
    })
  })
  describe('when fucntion results in partial jumps', () => {
    it('should return the number of jumps, rounded up', () => {
      const result = frogJumps(0, 10, 3)
      expect(result).toEqual(4)
    })
  })
})