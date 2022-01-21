const fs = require('fs')

const path = require('path')


function treeFn(dirpath) {
       if (dirpath == undefined) {
         console.log("Please Enter a Valid Command ");
       } else {
         let doesExist = fs.existsSync(dirpath);
         if (doesExist == true) {
           treeHelper(dirpath, " ");  // Call of function
         }
       }
     }