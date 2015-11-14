/// <reference path="../typings/tsd.d.ts"/>
import {Request} from "restify";
import {Response} from "restify";
import {Next} from "restify";


export class AhQueryController {

    public static get(req : Request, res : Response, next : Next){
        console.log("AhQueryController GET");
        res.send("w00t");
        return next();
    }

}






