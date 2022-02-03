const url = 'https://www.espncricinfo.com/series/ipl-2020-21-1210595'

const request = require('request')

const cheerio = require('cheerio')

request(url, cb);

function cb(err, response, html) {
  if (err) {
    console.error(err);
  } else {
    console.log(html);
  }
}
