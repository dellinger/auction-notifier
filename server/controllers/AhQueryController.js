/// <reference path="../../typings/tsd.d.ts"/>
var AuctionQuerySvc_1 = require("../services/AuctionQuerySvc");
var AuctionQuery = require("../models/AuctionQuery");
var AuctionQueryResult = require("../models/AuctionQueryResult");
var AhQueryController = (function () {
    function AhQueryController() {
    }
    AhQueryController.prototype.get = function (req, res, next) {
        var auctionQuerySvc = new AuctionQuerySvc_1.AuctionQuerySvc();
        console.log("AhQueryController GET");
        auctionQuerySvc.getAuctionQuery(function (error, response) {
            if (error) {
                console.log("There was an error in the get");
                res.send(500);
            }
            var auctionQuery = new AuctionQuery(response);
            auctionQuery.save(function (err) {
                if (err) {
                    console.error("Could not save Retrieved Auction Query");
                    res.send(500, "Could not save Retrieved Auction Query");
                }
                else {
                    console.log("Create a AuctionQueryResult now");
                    var auctionQueryResult = new AuctionQueryResult(response);
                    auctionQueryResult.save(function (err2) {
                        if (err2) {
                            console.error("Could not save Retrieved Auction Query Result");
                        }
                        else {
                            res.send(200);
                        }
                    });
                }
            });
        });
        return next();
    };
    return AhQueryController;
})();
exports.AhQueryController = AhQueryController;
//# sourceMappingURL=AhQueryController.js.map