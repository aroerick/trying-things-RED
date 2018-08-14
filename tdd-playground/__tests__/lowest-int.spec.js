const low = require('../lib/lowest-int')

describe('lowestInteger', () => {
  describe('when given array', () => {
    it('should return the lowest number greater than 0 and not in the array', () => {
      const result = low([2, 3, 21, 4])
      expect(result).toEqual(1)
    })
  })
  describe('when given array with duplicate values', () => {
    it('should return the lowest number greater than 0 and not in the array', () => {
      const result = low([0, 1, 2, 3, 21, 1, 4, 4])
      expect(result).toEqual(5)
    })
  })
  describe('when given array with negative numbers', () => {
    it('should return the lowest number greater than 0 and not in the array', () => {
      const result = low([-1, 3, 21, 4])
      expect(result).toEqual(1)
    })
  })
  describe('when input is not an array', () => {
    it('should error', () => {
      const result = low('pickle')
      expect(result).toEqual('error')
    })
  })
  describe('when given array with non-number indexes', () => {
    it('should error', () => {
      const result = low([1, 'apple', {}])
      expect(result).toEqual('error')
    })
  })
  describe('when called without an argument', () => {
    it('should error', () => {
      const result = low()
      expect(result).toEqual('error')
    })
  })
})
