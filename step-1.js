var https = require('https');

var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html',
  };

function getAndPrintHTMLChunks () {
  https.get(requestOptions, function(response) {
    response.setEncoding('utf8');
    response.on('data', function(chunk){
      console.log('Chunk Received: \n \n' + chunk + '\n');

    });
    response.on('end', function() {
      console.log('end');


    });
  });

}


getAndPrintHTMLChunks(requestOptions)
