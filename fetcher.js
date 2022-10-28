const request = require('request');
const fs = require('fs');
const path = require('path');
const pathname = process.argv[3]
const url = process.argv[2]


request(url, (error, response, body) => {
  if(error){
    console.log('error:', error); // Print the error if one occurred
  }
  if(response){
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  }
 fs.writeFile(pathname, body, function (err) {
  if (err) throw err;
  fs.stat(pathname, (err, stats) => {
    if (!err) {
      console.log(`Fetched & saved ${stats.size} bytes to ${pathname} successfully.`);
    } else {
      console.log('Could not obtain the file size.');
    }
});
  });
})

