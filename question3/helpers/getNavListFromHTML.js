
/**
 * 3rd party libs
 */
const cheerio = require("cheerio");

const getNavListFromHTML = (StringHTMLObjectNAVData) => {
    const $ = cheerio.load(StringHTMLObjectNAVData);
    // since we have 4 type of fields, we can continue on collecting next to fund name <td> and skip other three fileds
    return ([0, 1, 2, 3].map((navIdx) => {
        return {
            name: $('tr').find(`td:eq(${navIdx * 5})`).text().trim(),
            NAV: $('tr').find(`td:eq(${(navIdx * 5) + 1})`).text().trim()
        }
    }))
}

module.exports = getNavListFromHTML