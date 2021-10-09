const getNavListFromHTML = (HTMLObject) => {
    return ([0,1,2,3].map((navIdx) => {
        return {
            name:HTMLObject('tr').find(`td:eq(${navIdx * 5})`).text().trim(),
            NAV: HTMLObject('tr').find(`td:eq(${(navIdx * 5)+1})`).text().trim()
        }
    }))
}

module.exports = getNavListFromHTML