
/**
 * 3rd party libs
 */
const axios = require("axios");
const cheerio = require("cheerio");
const pretty = require("pretty");

/**
 * Helpers
 */
const getNavListFromHTML = require('./helpers/getNavListFromHTML')



// url
const url = "https://codequiz.azurewebsites.net/";

// function that used to scrape data
const scrapeNAVData = async () => {
    try {
        // Fetch HTML of the page we want to scrape, using hasCookie=true will set the cookie to pass cookie consent page :)
        const { data } = await axios({
            url,
            method: 'get',
            headers: {
                Cookie: "hasCookie=true"
            }
        })
        // Load HTML we fetched in the previous line
        const $ = cheerio.load(data);
        return getNavListFromHTML($)
    } catch (err) {
        console.error(err);
    }
}

const getSpecifiedNAV = async () => {
    // get nav data
    const navData = await scrapeNAVData()
    
    // get fundName via command line
    const specifiedFundName = process.argv[2];

    // log specified nav data
    specifiedNav = navData.filter((fund) => {
        return fund.name === specifiedFundName
    })

    // log the NAV
    console.log(specifiedNav[0].NAV);
}


// excecute the function when run node app
getSpecifiedNAV()