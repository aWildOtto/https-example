var https = require('https');

var i = 0;
var options = {
  host: 'www.theverge.com',
  path: '/2017/6/5/15739136/apple-files-app-ios-11-wwdc-2017'
};

// called by https when the request is made.
var callback = function(response) {
  console.log('In response handler callback!');

  response.on('data', function(chunk) {
    console.log('[-- CHUNK OF LENGTH ' + chunk.length + ' --]');
    i++;
    console.log(chunk.toString());
  });
}

console.log("I'm about to make the request!");

https.request(options, callback).end();

console.log("I've made the request!");

console.log(i+" chunks recieved");