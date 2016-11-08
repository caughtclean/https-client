function getHTML (options, callback) {
  var https = require('https');
  var buffer = "";
  var obj = options
  https.get(obj, function(response) {
    response.setEncoding('utf8');
    response.on('data', function(chunk){
      buffer += chunk

    });
    response.on('end', function() {
      callback(buffer);
    });
  });
}

module.exports = getHTML;