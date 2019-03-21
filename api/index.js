const cheerio = require('cheerio');
const axios = require('axios');

const blogger = async(url) => {
    let uri = await axios.get(url);
    const $ = cheerio.load(uri.data);
    const data = $('script')[0].children[0]
    const rp = JSON.parse( data.data.replace('var VIDEO_CONFIG =',''))
    return rp.streams[0];
}

module.exports = {blogger}