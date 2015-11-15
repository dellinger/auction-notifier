/// <reference path="../typings/tsd.d.ts"/>

import {Request} from "restify";
import {Response} from "restify";
import {Next} from "restify";
import {AuctionQuerySvc} from "../services/AuctionQuerySvc";
import * as AuctionQuery from "../models/AuctionQuery";

export class AhQueryController {


    public get(req : Request, res : Response, next : Next){
        var auctionQuerySvc = new AuctionQuerySvc();
        console.log("AhQueryController GET");
        auctionQuerySvc.getAuctions( (error, response) => {
            if(error){
                console.log("There was an error in the get");
                res.send(500);
            }
            var auctionQuery = new AuctionQuery(response);
            auctionQuery.save();
            res.send(response);
        });

        return next();
    }

}






