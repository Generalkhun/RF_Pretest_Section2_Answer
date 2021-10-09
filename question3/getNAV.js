
/**
 * 3rd party libs
 */
const axios = require("axios");
const cheerio = require("cheerio");
const pretty = require("pretty");

// get additional process args via command line
const args = process.argv;
console.log(args[2]);

// url
const url = "https://codequiz.azurewebsites.net/";

// function that used to scrape data
const scrapeData = async () => {
    try {
        // Fetch HTML of the page we want to scrape, using hasCookie=true will set the cookie to pass cookie consent page :)
        const { data } = await axios({
            url,
            method:'get',
            headers:{
                Cookie: "hasCookie=true"
            } 
        })
        // Load HTML we fetched in the previous line
        const $ = cheerio.load(data);
        console.log(pretty($.html()));
    } catch (err) {
        console.error(err);
    }
}


scrapeData()
