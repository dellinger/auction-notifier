'use strict';

var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var AuctionDataSchema = new Schema({
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

var AuctionDataQuerySchema = new Schema({
    realmName: String,
    auctions: [AuctionDataSchema],
    queryDate: Date
});

module.exports = mongoose.model('AuctionDataQuery', AuctionDataQuerySchema);
