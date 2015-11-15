/// <reference path="../typings/tsd.d.ts"/>
var AuctionQuery_1 = require("../services/AuctionQuery");
var AhQueryController = (function () {
    function AhQueryController() {
    }
    AhQueryController.prototype.get = function (req, res, next) {
        var auctionQuery = new AuctionQuery_1.AuctionQuery();
        console.log("AhQueryController GET");
        auctionQuery.getAuctions(function (error, response) {
            if (error) {
                console.log("There was an error in the get");
                res.send(500);
            }
            res.send(response);
        });
        return next();
    };
    return AhQueryController;
})();
exports.AhQueryController = AhQueryController;
//# sourceMappingURL=AhQueryController.js.map