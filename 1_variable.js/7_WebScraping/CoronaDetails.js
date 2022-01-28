
const request = require('request')

const cheerio = require('cheerio')

console.log("before");

request("https://www.worldometers.info/coronavirus/", cb);

function cb(error, response, html) {
  if (error) {
    console.error(error);
  } else {
    handleHtml(html);
  }
}


function handleHtml(html){
    let selTool = cheerio.load(html)
   // console.log(selTool);

   let contentArr = selTool('.maincounter-number span')

    //   for(let i=0 ; i<contentArr.length ;i++){
    //       let data = selTool(contentArr[i]).text()
    //       console.log(data)
    //   }

    let totalcases = selTool(contentArr[0]).text()
    console.log( 'TotalCases: ' + totalcases )
}







console.log("after");