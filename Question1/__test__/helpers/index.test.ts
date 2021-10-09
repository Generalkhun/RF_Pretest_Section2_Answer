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

describe('isPrime functionality', () => {
    test('not prime case 0', () => {
        expect(isPrime(0)).toBe(false)
    })
    test('not prime case 1', () => {
        expect(isPrime(1)).toBe(false)
    })
    test('not prime case small', () => {
        expect(isPrime(4)).toBe(false)
    })
    test('not prime case large', () => {
        expect(isPrime(9600)).toBe(false)
    })
    test('prime case small', () => {
        expect(isPrime(2)).toBe(true)
    })
    test('prime case large', () => {
        expect(isPrime(9697)).toBe(true)
    })
})
describe('isSquare functionality', () => {
    test('not square case 90', () => {
        expect(isSquare(90)).toBe(false)
    })
    test('square case 144', () => {
        expect(isSquare(144)).toBe(true)
    })
})

describe('isInFiboSequence functionality', () => {
    test('not fibo case 4', () => {
        expect(isInFiboSequence(4)).toBe(false)
    })
    test('fibo case 5', () => {
        expect(isInFiboSequence(5)).toBe(true)
    })
})

describe('findResult functionality', () => {
    test('isPrime with 0', () => {
        expect(findResult(0,'isPrime')).toBe(false)
    })
    test('isFibo with 0', () => {
        expect(findResult(0,'IsFibanacci')).toBe(false)
    })
    test('isPrime with 8', () => {
        expect(findResult(8,'isPrime')).toBe(false)
    })
    test('isFibo with 8', () => {
        expect(findResult(8,'IsFibanacci')).toBe(true)
    })
    test('isFibo with 11', () => {
        expect(findResult(11,'IsFibanacci')).toBe(false)
    })
    test('isPrime with 11', () => {
        expect(findResult(11,'isPrime')).toBe(true)
    })
    
})
