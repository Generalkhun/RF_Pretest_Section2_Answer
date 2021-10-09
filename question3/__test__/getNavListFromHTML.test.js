const getNavListFromHTML = require('../helpers/getNavListFromHTML')
const mockNAVData = require('./mockData')

describe('get correct nav', () => {
    test('get nav object', () => {
        expect(getNavListFromHTML(mockNAVData)).toEqual([{ "NAV": "-123.999", "name": "FUNDNAME1" }, { "NAV": "9.001", "name": "FUNDNAME2" }, { "NAV": "5.4321", "name": "FUNDNAME3" }, { "NAV": "4.567898765", "name": "FUNDNAME4" }])
    })
})