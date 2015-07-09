/**
 * Created by David on 7/9/2015.
 */
/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /things              ->  index
 * POST    /things              ->  create
 * GET     /things/:id          ->  show
 * PUT     /things/:id          ->  update
 * DELETE  /things/:id          ->  destroy
 */

'use strict';

var _ = require('lodash');

var mongoose = require('mongoose');
var AuctionDataQuerySchema = require('./auction_data_query.model.js');
var AuctionDataQuery = mongoose.model('AuctionDataQuery', AuctionDataQuerySchema);
var config = require('../../config/local.env.js');
var moment = require('moment');
var request = require('request');
var API_KEY;
var bnet;
try {
    API_KEY = config.BATTLENET_API_KEY;
    bnet = require('battlenet-api')(API_KEY);
} catch(e) {
    console.error("Api Key is required in local.env")
}

var intervalSeconds = config.AH_DATA_INTERVAL || 600;


var intervalFunction = function(){
   console.log("Scheduled job executed");
   retrieveAHData();
}

var retrieveAHData = function(realm){
  bnet.wow.auction({origin: 'us', realm: 'aerie-peak'}, function(err, response){
    if(err) {
        console.error("Could not retrieve AH data");
    }
    var urlToGrabDataFrom = response.files[0].url;
    var lastModified = response.files[0].lastModified;

    console.log("Url To Grab Data From: " + urlToGrabDataFrom);
    console.log("Last modified: " +   new moment(lastModified,'yyyyMMddHHmmssfff').toDate());

    request(urlToGrabDataFrom, function (error, response, body) {
      if (!error && response.statusCode == 200) {

       var auctions = JSON.parse(body);
        var auctionData =   new AuctionDataQuery({
          realmName: "aerie-peak",
          auctions: auctions.auctions.auctions,
          queryDate: new moment()
        })
        auctionData.save(function(err){
          if(err) {
            console.error(err);
          }
          console.log("Saved " + auctionData.auctions.length + " auctions from '" + auctionData.realmName + "' on " + auctionData.queryDate);
        });
      } else {
        console.error(error);
      }
    })
  });
};

setInterval(intervalFunction, intervalSeconds * 1000);



// Get list of things
//exports.index = function(req, res) {
//  Thing.find(function (err, things) {
//    if(err) { return handleError(res, err); }
//    return res.json(200, things);
//  });
//};
//
//// Get a single thing
//exports.show = function(req, res) {
//  Thing.findById(req.params.id, function (err, thing) {
//    if(err) { return handleError(res, err); }
//    if(!thing) { return res.send(404); }
//    return res.json(thing);
//  });
//};
//
//// Creates a new thing in the DB.
//exports.create = function(req, res) {
//  Thing.create(req.body, function(err, thing) {
//    if(err) { return handleError(res, err); }
//    return res.json(201, thing);
//  });
//};
//
//// Updates an existing thing in the DB.
//exports.update = function(req, res) {
//  if(req.body._id) { delete req.body._id; }
//  Thing.findById(req.params.id, function (err, thing) {
//    if (err) { return handleError(res, err); }
//    if(!thing) { return res.send(404); }
//    var updated = _.merge(thing, req.body);
//    updated.save(function (err) {
//      if (err) { return handleError(res, err); }
//      return res.json(200, thing);
//    });
//  });
//};
//
//// Deletes a thing from the DB.
//exports.destroy = function(req, res) {
//  Thing.findById(req.params.id, function (err, thing) {
//    if(err) { return handleError(res, err); }
//    if(!thing) { return res.send(404); }
//    thing.remove(function(err) {
//      if(err) { return handleError(res, err); }
//      return res.send(204);
//    });
//  });
//};
//
//function handleError(res, err) {
//  return res.send(500, err);
//}
