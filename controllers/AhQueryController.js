/// <reference path="../typings/tsd.d.ts"/>
var AuctionQuerySvc_1 = require("../services/AuctionQuerySvc");
var AuctionQuery = require("../models/AuctionQuery");
var AhQueryController = (function () {
    function AhQueryController() {
    }
    AhQueryController.prototype.get = function (req, res, next) {
        var auctionQuerySvc = new AuctionQuerySvc_1.AuctionQuerySvc();
        console.log("AhQueryController GET");
        auctionQuerySvc.getAuctions(function (error, response) {
            if (error) {
                console.log("There was an error in the get");
                res.send(500);
            }
            var auctionQuery = new AuctionQuery(response);
            auctionQuery.save();
            res.send(response);
        });
        return next();
    };
    return AhQueryController;
})();
exports.AhQueryController = AhQueryController;
//# sourceMappingURL=AhQueryController.js.map