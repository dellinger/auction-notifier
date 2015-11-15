/// <reference path="../typings/tsd.d.ts"/>
var bnet = require('battlenet-api')('5zsncb9sh8dwsdzbfdv9b9esn2q8vh2p');
var config = require('config');
var AuctionQuery = (function () {
    function AuctionQuery() {
        this.apiKey = process.env.bnetApiKey;
        if (!this.apiKey) {
            console.error("To connect to battle-net api, add your apiKey to process.env.bnetApiKey");
        }
    }
    AuctionQuery.prototype.getAuctions = function (getAuctionsCallback) {
        bnet.wow.auction({ origin: 'us', realm: 'amanthul' }, function (error, response) {
            console.log("getAuctions call");
            getAuctionsCallback(error, response);
        });
    };
    return AuctionQuery;
})();
exports.AuctionQuery = AuctionQuery;
//# sourceMappingURL=AuctionQuery.js.map