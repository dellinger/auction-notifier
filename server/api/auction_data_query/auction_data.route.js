var dme;
(function (dme) {
    var auctiondata;
    (function (auctiondata) {
        var AuctionDataQueryService = require('AuctionDataQueryService');
        var express = require('express');
        var AuctionDataRoute = (function () {
            function AuctionDataRoute() {
            }
            AuctionDataRoute.prototype.listAeriePeakAuctions = function (req, res) {
                var service = new AuctionDataQueryService(false);
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
