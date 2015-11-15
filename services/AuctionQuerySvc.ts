/// <reference path="../typings/tsd.d.ts"/>
var config = require('config');
var bnet = require('battlenet-api')(config.get("bnet_api"));


export class AuctionQuerySvc {

    private apiKey : string;

    public getAuctions(getAuctionsCallback : (error, response) => void) {
        bnet.wow.auction({origin: 'us', realm: 'amanthul'}, (error, response) => {
            console.log("getAuctions call");
            getAuctionsCallback(error,response);
        })
    }

}