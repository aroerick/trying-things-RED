const comp = require('../lib/string-compression')

describe('stringCompression', () => {
    decribe('when there are multiple letters in a row', () => {
        it('should return that letter once and the number of times it appears', () => {
            const result = comp('aaaabbbcc')
            expect(result).toEqual('a4b3c2')
        })
    })
    decribe('when a letter appears once', () => {
        it('should return that letter followed by a 1', () => {
            const result = comp('abc')
            expect(result).toEqual('a1b1c1')
        })
    })
    decribe('when there are non letter characters', () => {
        it('should error', () => {
            const result = comp('abc123')
            expect(result).toEqual('error')
        })
    })
    decribe('when input is not a string', () => {
        it('should error', () => {
            const result = comp(2)
            expect(result).toEqual('error')
        })
    })
    decribe('when same character repeated out of sequence', () => {
        it('should not combine the results', () => {
            const result = comp('abba')
            expect(result).toEqual('a1b2a1')
        })
    })
})