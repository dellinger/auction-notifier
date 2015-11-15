/// <reference path="../typings/tsd.d.ts"/>

import {Request} from "restify";
import {Response} from "restify";
import {Next} from "restify";
import {AuctionQuery} from "../services/AuctionQuery";
export class AhQueryController {


    public get(req : Request, res : Response, next : Next){
        var auctionQuery = new AuctionQuery();
        console.log("AhQueryController GET");
        auctionQuery.getAuctions( (error, response) => {
            if(error){
                console.log("There was an error in the get");
                res.send(500);
            }
            res.send(response);
        });

        return next();
    }

}






