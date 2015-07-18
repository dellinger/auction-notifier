var bnet = require('battlenet-api')(process.env.BATTLE_NET_API_KEY);
var request = require('request');
var moment = require('moment');

exports.getAeriePeakAuctions = function(callback) {

  bnet.wow.auction({ origin: 'us', realm: 'aerie-peak' }, function (err, response) {
    if (err) {
        console.error("Could not retrieve AH data");
    }
    var urlToGrabDataFrom = response.files[0].url;
    var lastModified = response.files[0].lastModified;
    console.log("Url To Grab Data From: " + urlToGrabDataFrom);
    console.log("Last modified: " + new moment(lastModified, 'yyyyMMddHHmmssfff').toDate());
    request(urlToGrabDataFrom, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            var auctions = JSON.parse(body);
            console.log(auctions);
            callback(null, auctions);
        }
        else {
            console.error(error);
            callback(err);
        }
    });
  });
};
