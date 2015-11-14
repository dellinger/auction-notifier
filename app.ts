/// <reference path="./typings/tsd.d.ts"/>
/// <reference path="./controllers/AhQueryController.ts"/>

import {AhQueryController} from "./controllers/AhQueryController";

var restify = require('restify');
var server = restify.createServer();

server.use(restify.acceptParser(server.acceptable));
server.use(restify.queryParser());
server.use(restify.bodyParser());

server.listen(3000, () => {
  console.log("Server started @ 3000");
});


server.get("/products", AhQueryController.get);
