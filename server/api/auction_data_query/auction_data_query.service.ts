///<reference path="..\..\..\typings\node\node.d.ts"/>
/**
 * Created by David on 7/9/2015.
 */

module dme.auctiondata {

    import mongoose = require('mongoose');
    import AuctionDataQuerySchema = require('./auction_data_query.model.js.old');
    import config = require('../../config/local.env.js');
    import moment = require('moment');
    import request = require('request');
    export class AuctionDataQueryService {

        private API_KEY : string;
        private bnet: any;
        private intervalFunction: Number;

        constructor(){
            try {
                API_KEY = config.BATTLENET_API_KEY;
                bnet = require('battlenet-api')(API_KEY);
            } catch (e) {
                console.error("Api Key is required in local.env")
            }
            intervalSeconds = config.AH_DATA_INTERVAL || 600;
            setInterval(intervalFunction, intervalSeconds * 1000);
        }




    private intervalFunction = () => {
        console.log("Scheduled job executed");
        retrieveAHData('aerie-peak');
    }

    public retrieveAHData = function (realm) {
        bnet.wow.auction({origin: 'us', realm: realm},(err, response) => {
            if (err) {
                console.error("Could not retrieve AH data");
            }
            var urlToGrabDataFrom = response.files[0].url;
            var lastModified = response.files[0].lastModified;

            console.log("Url To Grab Data From: " + urlToGrabDataFrom);
            console.log("Last modified: " + new moment(lastModified, 'yyyyMMddHHmmssfff').toDate());

            request(urlToGrabDataFrom, (error, response, body) => {
                if (!error && response.statusCode == 200) {

                    var auctions:AuctionDataQuery = <AuctionDataQuery>JSON.parse(body);
                    var auctionData = new AuctionDataQuery({
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
                } else {
                    console.error(error);
                }
            })
        });
    };


    }





}
