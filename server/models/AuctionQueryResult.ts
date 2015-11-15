/// <reference path="../../typings/tsd.d.ts"/>

/// <reference path="IAuctionQueryResult"/>

import * as mongoose from "mongoose";
import {IAuctionQueryResult} from "./IAuctionQueryResult";

var auctionsSchema = new mongoose.Schema({
    auc: Number,
    item: Number,
    owner: String,
    ownerRealm: String,
    bid: Number,
    buyout: Number,
    quantity: Number,
    timeLeft: String,
    rand: Number,
    seed: Number,
    context: Number,
});

var realmsSchema = new mongoose.Schema({
    name: String,
    slug: String
});

var auctionQueryResultSchema = new mongoose.Schema({
    realms: realmsSchema,
    auctions: auctionsSchema
});

interface IAuctionQueryResultModel extends IAuctionQueryResult, mongoose.Document {}

var AuctionQueryResult = mongoose.model<IAuctionQueryResultModel>("AuctionQueryResult", auctionQueryResultSchema);

export = AuctionQueryResult;