var https = require('https');


function getAndPrintHTML(options) {
  var buffer = {}
  var obj = options
  https.get(obj, function(response) {
    response.setEncoding('utf8');
    response.on('data', function(chunk){
      buffer += chunk
      console.log(buffer)

    });
    response.on('end', function() {
      console.log('end');


    });
  });

}

var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html',
  };




getAndPrintHTML(requestOptions)
