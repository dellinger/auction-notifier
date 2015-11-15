/// <reference path="../../typings/tsd.d.ts"/>
var Config_1 = require("../../config/Config");
var bnet = require('battlenet-api');
var AuctionQuerySvc = (function () {
    function AuctionQuerySvc() {
        var config = new Config_1.Config();
        this.apiKey = config.get("bnet_api");
        if (!this.apiKey) {
            throw new Error("Battle net api key has not been provided");
        }
    }
    AuctionQuerySvc.prototype.getAuctionQuery = function (getAuctionsCallback) {
        var _this = this;
        console.log("getAuctionQuery call");
        bnet(this.apiKey).wow.auction({ origin: 'us', realm: 'amanthul' }, function (error, response) {
            _this.parseAuctionQueryResults(response, function (error, response) {
                if (error) {
                    getAuctionsCallback(error);
                }
                getAuctionsCallback(error, response);
            });
        });
    };
    AuctionQuerySvc.prototype.parseAuctionQueryResults = function (results, callback) {
        console.log("getAuctionQuery call");
    };
    return AuctionQuerySvc;
})();
exports.AuctionQuerySvc = AuctionQuerySvc;
//# sourceMappingURL=AuctionQuerySvc.js.map