const comp = require('../lib/string-compression')

describe('stringCompression', () => {
    describe('when there are multiple letters in a row', () => {
        it('should return that letter once and the number of times it appears', () => {
            const result = comp('rrdd')
            expect(result).toEqual('r2d2')
        })
    })
    describe('when a letter appears once', () => {
        it('should return that letter followed by a 1', () => {
            const result = comp('abc')
            expect(result).toEqual('a1b1c1')
        })
    })
    describe('when there are non letter characters', () => {
        it('should error', () => {
            const result = comp('a bbb c123!')
            expect(result).toEqual('a1b3c1')
        })
    })
    describe('when input is not a string', () => {
        it('should error', () => {
            const result = comp(2)
            expect(result).toEqual('error')
        })
    })
    describe('when same character repeated out of sequence', () => {
        it('should not combine the results', () => {
            const result = comp('abba')
            expect(result).toEqual('a1b2a1')
        })
    })
    describe('when a capital and lowercase of a letter appear', () => {
        it('should treat them as separate', () => {
            const result = comp('aAbb')
            expect(result).toEqual('a1A1b2')
        })
    })
    describe('when called without an argument', () => {
        it('should error', () => {
            const result = comp()
            expect(result).toEqual('error')
        })
    })
    describe('when called without an empty string', () => {
        it('should error', () => {
            const result = comp('')
            expect(result).toEqual('error')
        })
    })
})