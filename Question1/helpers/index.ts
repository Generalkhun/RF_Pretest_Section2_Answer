export const inputNumberRescrictor = (inputNumber: string) => {
    const inputNumberCal = parseFloat(inputNumber)
    if (inputNumberCal < 0) {
        return 1
    }
    return Math.round(inputNumberCal)
}

/**
 * loop until sqrt of the number is enough for checking wether it is prime or not,
 * ref:https://stackoverflow.com/questions/5811151/why-do-we-check-up-to-the-square-root-of-a-prime-number-to-determine-if-it-is-pr
 */
export const isPrime = (num: number) => {
    for (let i = 2, s = Math.sqrt(num); i <= s; i++)
        if (num % i === 0) return false;
    return num > 1;
}

export const isSquare = (n: number) => {
    return n > 0 && Math.sqrt(n) % 1 === 0;
};

/** 
 * regcognizing an integer in fibonacci sequence can use this formula:
 * ref: https://en.wikipedia.org/wiki/Fibonacci_number#Recognizing_Fibonacci_numbers
*/
export const isInFiboSequence = (num: number) => {
    if (isSquare(5 * (num * num) - 4) || isSquare(5 * (num * num) + 4)) {
        return true;
    } else { return false; }
}

export const findResult = (inputNumber: number, calculationType: string) => {
    // since 0 is neither prime nor fibonacci number so return false
    if (inputNumber === 0) {
        return false
    }
    // prime check
    if (calculationType === 'isPrime') {
        return isPrime(inputNumber)
    }
    // fibo check
    return isInFiboSequence(inputNumber)
}
