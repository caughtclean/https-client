var getHTML = require('./http-functions');

getHTML(requestOptions, printHTML)

function printHTML(html) {
  console.log(html);
}

var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html',
  };
