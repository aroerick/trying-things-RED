const uc = require('../lib/unique-char')

describe('stringucression', () => {
    describe('when input hasmulitple single letters', () => {
        it('should return the first that appears', () => {
            const result = uc('abc')
            expect(result).toEqual('a')
        })
    })
    describe('when input has no unique letters', () => {
        it('should error', () => {
            const result = uc('aabbcc')
            expect(result).toEqual(undefined)
        })
    })
    describe('when there are non letter characters', () => {
        it('should error', () => {
            const result = uc('abbbc123!')
            expect(result).toEqual('error')
        })
    })
    describe('when input is not a string', () => {
        it('should error', () => {
            const result = uc(2)
            expect(result).toEqual('error')
        })
    })
    describe('when input has spaces', () => {
        it('should not result in space', () => {
            const result = uc('no one')
            expect(result).toEqual('e')
        })
    })
    describe('when a capital and lowercase of a letter appear', () => {
        it('should treat them as separate', () => {
            const result = uc('aAbb')
            expect(result).toEqual('a')
        })
    })
    describe('when called without an argument', () => {
        it('should error', () => {
            const result = uc()
            expect(result).toEqual('error')
        })
    })
    describe('when called without an empty string', () => {
        it('should error', () => {
            const result = uc('')
            expect(result).toEqual('error')
        })
    })
})