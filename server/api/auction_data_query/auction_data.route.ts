
module dme.auctiondata {
    var AuctionDataQueryService = require('AuctionDataQueryService');
    var express = require('express');
    export class AuctionDataRoute {

         constructor(){}

         public listAeriePeakAuctions(req: any, res: any) {
             var service : AuctionDataQueryService = new AuctionDataQueryService(false);
             service.retrieveAHData("aerie-peak", (err, auctions) => {
                 console.log(auctions);
                 res.send(auctions);
             });
         }

    }


}
