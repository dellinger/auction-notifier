/**
 * Main application routes
 */

'use strict';
//import auctionDataRoute = module('./api/auction_data_query/auction_data_query.service');

    var errors = require('./components/errors');


    module.exports = (app) => {



        // Insert routes below
        // Auction Endpoints
        app.get('/api/auctions', function(req, res){
            console.log("In auctions endpoint");
            auctionDataRoute = new dme.auctiondata.AuctionDataRoute();
            auctionDataRoute.listAeriePeakAuctions(req,res);
        });


        // All undefined asset or api routes should return a 404
        app.route('/:url(api|auth|components|app|bower_components|assets)/*')
            .get(errors[404]);

        // All other routes should redirect to the index.html
        app.route('/*')
            .get( (req, res) => {
                res.sendfile(app.get('appPath') + '/index.html');
            });
    };
