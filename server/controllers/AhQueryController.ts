/// <reference path="../../typings/tsd.d.ts"/>

import {Request} from "restify";
import {Response} from "restify";
import {Next} from "restify";
import {AuctionQuerySvc} from "../services/AuctionQuerySvc";
import * as AuctionQuery from "../models/AuctionQuery";
import * as AuctionQueryResult from "../models/AuctionQueryResult";

export class AhQueryController {


    public get(req : Request, res : Response, next : Next){
        var auctionQuerySvc = new AuctionQuerySvc();
        console.log("AhQueryController GET");
        auctionQuerySvc.getAuctionQuery( (error, response) => {
            if(error){
                console.log("There was an error in the get");
                res.send(500);
            }
            var auctionQuery = new AuctionQuery(response);
            auctionQuery.save(err => {
                if(err){
                    console.error("Could not save Retrieved Auction Query");
                    res.send(500,"Could not save Retrieved Auction Query");
                } else {
                    console.log("Create a AuctionQueryResult now");
                    let auctionQueryResult = new AuctionQueryResult(response);
                    auctionQueryResult.save(err2 => {
                        if(err2){
                            console.error("Could not save Retrieved Auction Query Result");
                        } else {
                            res.send(200);
                        }

                    });

                }
            });
        });

        return next();
    }

}






