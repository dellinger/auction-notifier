var express = require('express');
var router = express.Router();
var auctionHouseData = require('../api/auction_house_data.js');

/* GET home page. */
router.get('/auctions', function(req, res, next) {
  auctionHouseData.getAeriePeakAuctions(function(error, auctions){
      if(error){
        res.status(500).json({ error: error });
      }
      res.send(auctions);
  });

});

module.exports = router;
