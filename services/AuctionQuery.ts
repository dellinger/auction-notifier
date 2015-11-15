/// <reference path="../typings/tsd.d.ts"/>
var bnet = require('battlenet-api')('5zsncb9sh8dwsdzbfdv9b9esn2q8vh2p');
var config = require('config');

export class AuctionQuery {

    private apiKey : string;
    constructor(){
        this.apiKey = process.env.bnetApiKey;
        if(!this.apiKey) {
            console.error("To connect to battle-net api, add your apiKey to process.env.bnetApiKey");
        }
    }

    public getAuctions(getAuctionsCallback : (error, response) => void) {
        bnet.wow.auction({origin: 'us', realm: 'amanthul'}, (error, response) => {
            console.log("getAuctions call")
            getAuctionsCallback(error,response);
        })
    }

}