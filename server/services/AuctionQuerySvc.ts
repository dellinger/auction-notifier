/// <reference path="../../typings/tsd.d.ts"/>

import {Config} from "../../config/Config";
var bnet = require('battlenet-api');

export class AuctionQuerySvc {

    apiKey: string;

    constructor(){
        let config = new Config();
        this.apiKey = config.get("BATTLE_NET_API_KEY");
        if(!this.apiKey){
            throw new Error("Battle net api key has not been provided");
        }
    }

    public getAuctionQuery(getAuctionsCallback : (error, response?) => void) {
        console.log("getAuctionQuery call");
        bnet(this.apiKey).wow.auction({origin: 'us', realm: 'amanthul'} , (error, response) => {
            this.parseAuctionQueryResults(response, (error, response?) => {
                if(error){
                    getAuctionsCallback(error);
                }
                getAuctionsCallback(error,response);
            });

        });
    }

    public parseAuctionQuery(results: any,callback : (error, response) => void) {
        console.log("Saving Auction Query");
        let auctionQuery = new AuctionQuery(results);
        auctionQuery.save(error => {
            if(err){
                console.error("Could not save Auction Query Results");
            } else {
                //TODO: Create a parse auction query results function.
                // Think about the model a bit more to see if that is what I want
                parseAuctionQueryResults()
            }
        })
        //TODO: Do something with the auction results (save them?)
    }

}