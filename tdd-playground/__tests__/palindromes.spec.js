const pal = require('../lib/palindromes.js')

describe('palindromes', () => {
  describe('when string is a palindrome', () => {
    it('should return true', () => {
      const result = pal('mom')
      expect(result).toEqual(true)
    })
  })
  describe('when string has asymmetrical spaces but is palindrome', () => {
    it('should return true', () => {
      const result = pal('may a moody baby doom a yam')
      expect(result).toEqual(true)
    })
  })
  describe('when string has asymmetrical punctuation but is palindrome', () => {
    it('should return true', () => {
      const result = pal('may a moody baby doom a yam!')
      expect(result).toEqual(true)
    })
  })
  describe('when string has asymmetrical capitalization but is palindrome', () => {
    it('should return true', () => {
      const result = pal('May a moody baby doom a yam')
      expect(result).toEqual(true)
    })
  })
  describe('when input is not a string', () => {
    it('should return false', () => {
      const result = pal(303)
      expect(result).toEqual(false)
    })
  })
})
