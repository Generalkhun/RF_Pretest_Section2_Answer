import {
    inputNumberRescrictor,
    isPrime,
    isSquare,
    isInFiboSequence,
    findResult

} from '../../helpers'

describe('inputNumberRescrictor functionality', () => {
    test('negative number case', () => {
        expect(inputNumberRescrictor('-10')).toBe(1)
    })
    test('float number case to 0', () => {
        expect(inputNumberRescrictor('0.0002')).toBe(0)
    })
    test('float number case floor', () => {
        expect(inputNumberRescrictor('3.14165')).toBe(3)
    })
    test('float number case ceiling', () => {
        expect(inputNumberRescrictor('18.87')).toBe(19)
    })
})

export { }