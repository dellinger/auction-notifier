///<reference path="..\..\..\typings\node\node.d.ts"/>
///<reference path="..\..\..\typings\mongoose\mongoose.d.ts"/>
///<reference path="..\..\..\typings\moment\moment-node.d.ts"/>
///<reference path="Auction.model.ts"/>
/**
 * Created by David on 7/9/2015.
 */

module dme.auctiondata {

    var mongoose = require('mongoose');
    var Auction_Query = require('Auction_Query');
    var config = require('../../config/local.env.js');
    var moment = require('moment');
    var request = require('request');

    export class AuctionDataQueryService {

        private API_KEY : string;
        private bnet: any;
        private intervalSeconds: number;

        constructor(startInterval : boolean){
            try {
                this.API_KEY = config.BATTLENET_API_KEY;
                this.bnet = require('battlenet-api')(this.API_KEY);
            } catch (e) {
                console.error("Api Key is required in local.env")
            }
            this.intervalSeconds = config.AH_DATA_INTERVAL || 600;
            if(startInterval){
                setInterval(this.intervalFunction, this.intervalSeconds * 1000);
            }

        }

        public intervalFunction = () => {
            console.log("Scheduled job executed");
            this.retrieveAHData('aerie-peak', (err, auctions) => {
                console.log("In interval functions retrieve my auctions");
                this.saveAHData(auctions);
            });
        };

        public retrieveAHData = (realm : string, callback : (err : string, auctions?: Auction_Query) => void) => {
            this.bnet.wow.auction({origin: 'us', realm: realm},(err, response) => {
                if (err) {
                    console.error("Could not retrieve AH data");
                }
                var urlToGrabDataFrom = response.files[0].url;
                var lastModified = response.files[0].lastModified;

                console.log("Url To Grab Data From: " + urlToGrabDataFrom);
                console.log("Last modified: " + new moment(lastModified, 'yyyyMMddHHmmssfff').toDate());

                request(urlToGrabDataFrom, (error, response, body) => {
                    if (!error && response.statusCode == 200) {
                        var auctions:Auction_Query = <Auction_Query>JSON.parse(body);
                        callback(null,auctions);
                    } else {
                        console.error(error);
                        callback(err);
                    }
                })
            });
        };


        public saveAHData = (auctions:Auction_Query) => {
            var auctionData = new Auction_Query({
                realmName: "aerie-peak",
                auctions: auctions,
                queryDate: new moment()
            });
            auctionData.save(function (err) {
                if (err) {
                    console.error(err);
                }
                console.log("Saved " + auctionData.auctions.length + " auctions from '" + auctionData.realmName
                    + "' on " + auctionData.queryDate);
            });
        }
    }






}
