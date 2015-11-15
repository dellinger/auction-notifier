/// <reference path="../typings/tsd.d.ts"/>
var config = require('config');
var bnet = require('battlenet-api')(config.get("bnet_api"));
var AuctionQuerySvc = (function () {
    function AuctionQuerySvc() {
    }
    AuctionQuerySvc.prototype.getAuctions = function (getAuctionsCallback) {
        bnet.wow.auction({ origin: 'us', realm: 'amanthul' }, function (error, response) {
            console.log("getAuctions call");
            getAuctionsCallback(error, response);
        });
    };
    return AuctionQuerySvc;
})();
exports.AuctionQuerySvc = AuctionQuerySvc;
//# sourceMappingURL=AuctionQuerySvc.js.map