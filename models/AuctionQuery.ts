/// <reference path="../typings/tsd.d.ts"/>
/// <reference path="IAuctionQuery"/>

import * as mongoose from "mongoose";
import {IAuctionQuery} from "./IAuctionQuery";

var auctionQueryFilesSchema = new mongoose.Schema({
    url: String,
    lastModified: String,
});

var auctionQuerySchema = new mongoose.Schema({
    files: auctionQueryFilesSchema
});

interface IAuctionQueryModel extends IAuctionQuery, mongoose.Document {}

var AuctionQuery = mongoose.model<IAuctionQueryModel>("AuctionQuery", auctionQuerySchema);

export = AuctionQuery;