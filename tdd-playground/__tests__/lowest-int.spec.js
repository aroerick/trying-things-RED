const low = require('../lib/lowest-int')

describe('lowestInteger', () => {
  describe('when given array', () => {
    it('should return the lowest number greater than 0 and not in the array', () => {
      const result = low([0, 2, 3, 21, 4])
      expect(result).toEqual(1)
    })
  })
  describe('when given array with duplicate values', () => {
    it('should return the lowest number greater than 0 and not in the array', () => {
      const result = low([1, 2, 3, 21, 1, 4, 4])
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


  describe('When array length is zero', () => {
    it('should return 0', () => {
      const result = low([])
      expect(result).toEqual('error')
    })
  })
  describe('if array is not passed in', () => {
    it('should return 0', () => {
      const result = low('hello')
      expect(result).toEqual('error')
    })
  })
  describe('if array is passed with elements that are  not integers', () => {
    it('should return 0', () => {
      const result = low([1, 3, 5, 'hello'])
      expect(result).toEqual('error')
    })
  })
  describe('all array elements are negative', () => {
    it('should return 1', () => {
      const result = low([-1, 0, -2, -3])
      expect(result).toEqual(1)
    })
  })
  describe('if array contains all the same number', () => {
    it('should return a number 1 lower than it unless it would equal zero', () => {
      const result = low([1, 1, 1, 1, 1])
      expect(result).toEqual(2)
    })
  })
  describe('if array contains valid positive integers', () => {
    it('should return smallest positive number', () => {
      const result = low([1, 2, 3, 4, 6, 1])
      expect(result).toEqual(5)
    })
  })
})
