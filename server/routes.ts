///<reference path="..\typings\node\node.d.ts"/>
/**
 * Main application routes
 */

'use strict';

var errors = require('./components/errors');
var auctionDataRoute = require('./api/auction_data_query/auction_data.route');
module.exports = (app) => {

  // Insert routes below
  app.use('/api/things', require('./api/thing'));

  // Auction Endpoints
  app.get('/api/auctions', function(req, res){
    auctionDataRoute.listAeriePeakAuctions(req,res)
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
