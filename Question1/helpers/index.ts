export const inputNumberRescrictor = (inputNumber: string) => {
    const inputNumberCal = parseFloat(inputNumber)
    if (inputNumberCal < 0) {
        return 1
    }
    return Math.round(inputNumberCal)
}
