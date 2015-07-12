///<reference path="..\..\..\typings\node\node.d.ts"/>
///<reference path="..\..\..\typings\express\express.d.ts"/>
///<reference path="auction_data_query.service.ts"/>
var dme;
(function (dme) {
    var auctiondata;
    (function (auctiondata) {
        // var AuctionDataQueryService = require('AuctionDataQueryService');
        var express = require('express');
        var AuctionDataRoute = (function () {
            function AuctionDataRoute(app) {
            }
            AuctionDataRoute.listAeriePeakAuctions = function (req, res) {
                var service = new auctiondata.AuctionDataQueryService(false);
                service.retrieveAHData("aerie-peak", function (err, auctions) {
                    console.log(auctions);
                    res.send(auctions);
                });
            };
            return AuctionDataRoute;
        })();
        auctiondata.AuctionDataRoute = AuctionDataRoute;
    })(auctiondata = dme.auctiondata || (dme.auctiondata = {}));
})(dme || (dme = {}));
//# sourceMappingURL=auction_data.route.js.map