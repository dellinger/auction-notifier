/// <reference path="../../typings/tsd.d.ts"/>
/// <reference path="IAuctionQueryResult"/>
var mongoose = require("mongoose");
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
    context: Number
});
var realmsSchema = new mongoose.Schema({
    name: String,
    slug: String
});
var auctionQueryResultSchema = new mongoose.Schema({
    realms: realmsSchema,
    auctions: auctionsSchema
});
var AuctionQueryResult = mongoose.model("AuctionQueryResult", auctionQueryResultSchema);
module.exports = AuctionQueryResult;
//# sourceMappingURL=AuctionQueryResult.js.map