export const inputNumberRescrictor = (inputNumber: string) => {
    const inputNumberCal = parseFloat(inputNumber)
    if (inputNumberCal < 0) {
        return 1
    }
    return Math.round(inputNumberCal)
}


export const findResult = (inputNumber:string, calculationType: string) => {
    console.log('inputNumber',inputNumber);
    console.log('calculationType',calculationType);
    
}