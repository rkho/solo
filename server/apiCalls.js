var request = require('request');
var OAuth   = require('oauth-1.0a');
var apiKeys = require('../_apiKeys.js')

exports.getResults = function(data){
  request({
    url: "http://api.yelp.com/v2/search?location=94102&cll=37.783624,-122.408999&limit=10&category_filter=restaurants&term=" + data.name,
    method: 'GET',
    headers: apiKeys.oauth.toHeader(apiKeys.oauth.authorize(apiKeys.token))
  }, function(error, response, body) {
    console.log(response);
  });
}

return module.exports;