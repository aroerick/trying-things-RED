const one = require('../lib/one-away')

describe('oneAway', () => {
  describe('when target can be reached with one addition', () => {
    it('should return true', () => {
      const result = one('ple', 'pale')
      expect(result).toEqual(true)
    })
  })
  describe('when target can be reached with one deletion', () => {
    it('should return true', () => {
      const result = one('pales', 'pale')
      expect(result).toEqual(true)
    })
  })
  describe('when target can be reached with one substitution', () => {
    it('should return true', () => {
      const result = one('pale', 'bale')
      expect(result).toEqual(true)
    })
  })
  describe('when input and target are equal', () => {
    it('should return true', () => {
      const result = one('pale', 'pale')
      expect(result).toEqual(true)
    })
  })
  describe('when target cannot be reached with one operation', () => {
    it('should return false', () => {
      const result = one('pickle', 'pale')
      expect(result).toEqual(false)
    })
  })
  describe('when enough arguments are not provided', () => {
    it('should error', () => {
      const result = one('pale')
      expect(result).toEqual('error')
    })
  })
  describe('when arguments are not strings', () => {
    it('should error', () => {
      const result = one(2, 'pale')
      expect(result).toEqual('error')
    })
  })
})