/// <reference path="../typings/tsd.d.ts"/>
/// <reference path="IAuctionQuery"/>
var mongoose = require("mongoose");
var auctionQueryFilesSchema = new mongoose.Schema({
    url: String,
    lastModified: String
});
var auctionQuerySchema = new mongoose.Schema({
    files: auctionQueryFilesSchema
});
var AuctionQuery = mongoose.model("AuctionQuery", auctionQuerySchema);
module.exports = AuctionQuery;
//# sourceMappingURL=AuctionQuery.js.map