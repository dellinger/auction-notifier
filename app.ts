/// <reference path="./typings/tsd.d.ts"/>
/// <reference path="./controllers/AhQueryController.ts"/>
/// <reference path="./config/Config.ts"/>

import {AhQueryController} from "./controllers/AhQueryController";
import {Config} from "./config/Config";

var restify = require('restify');
var server = restify.createServer();
var config = new Config();

server.use(restify.acceptParser(server.acceptable));
server.use(restify.queryParser());
server.use(restify.bodyParser());

server.listen(3000, () => {
  console.log("Server started @ 3000");
  config.get('bnet_api');
});

var ahQueryController = new AhQueryController();
server.get("/auctions", ahQueryController.get);
