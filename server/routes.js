/**
 * Main application routes
 */
'use strict';
var errors = require('./components/errors');
module.exports = function (app) {
    app.get('/api/auctions', function (req, res) {
        console.log("In auctions endpoint");
        auctionDataRoute = new dme.auctiondata.AuctionDataRoute();
        auctionDataRoute.listAeriePeakAuctions(req, res);
    });
    app.route('/:url(api|auth|components|app|bower_components|assets)/*')
        .get(errors[404]);
    app.route('/*')
        .get(function (req, res) {
        res.sendfile(app.get('appPath') + '/index.html');
    });
};
