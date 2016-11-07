var https = require('https');

var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html',
  };

function getAndPrintHTML() {
  var buffer = {}
  https.get(requestOptions, function(response) {
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


getAndPrintHTML(requestOptions)
