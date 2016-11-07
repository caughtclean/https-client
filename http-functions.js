module.exports = function getHTML (options, callback) {



function getHTML(options, callback) {
  var https = require('https');
  var buffer = {}
  var obj = options
  https.get(obj, function(response) {
    response.setEncoding('utf8');
    response.on('data', function(chunk){
      buffer += chunk

    });
    response.on('end', function() {
      printHTML(buffer)
      console.log('end');


    });
  });

}

function printHTML(html) {
  console.log(html);
}

var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html',
  };




getHTML(requestOptions, printHTML)

};