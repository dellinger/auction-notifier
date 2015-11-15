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

    public parseAuctionQueryResults(results: any,callback : (error, response) => void) {
        console.log("getAuctionQuery call");

    }

}