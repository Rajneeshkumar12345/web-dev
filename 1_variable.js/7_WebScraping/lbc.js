
const request = require('request')

const cheeerio = require('cheerio')

let url = "https://www.espncricinfo.com/series/ipl-2020-21-1210595/chennai-super-kings-vs-kings-xi-punjab-53rd-match-1216506/ball-by-ball-commentary"

request(url, cb)

function cb(error, response, html) {
    if (error) {
      console.error(error);
    } else {
      handleHtml(html);
    }
  }
  
  
  function handleHtml(html){
      let selTool = cheerio.load(html)
  }  //// vs chheck ker rha th just jokr////////
  ////////////just last check