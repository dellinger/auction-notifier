/// <reference path="./typings/tsd.d.ts"/>
/// <reference path="./controllers/AhQueryController.ts"/>
/// <reference path="./config/Config.ts"/>
var AhQueryController_1 = require("./controllers/AhQueryController");
var Config_1 = require("./config/Config");
var mongoose = require('mongoose');
var restify = require('restify');
var server = restify.createServer();
var config = new Config_1.Config();
server.use(restify.acceptParser(server.acceptable));
server.use(restify.queryParser());
server.use(restify.bodyParser());
server.listen(3000, function () {
    console.log("Server started @ 3000");
    config.get('bnet_api');
});
mongoose.connect(config.get('db_uri'), {}, function (one) {
    console.log("Mongo connected");
});
// REST Routes
var ahQueryController = new AhQueryController_1.AhQueryController();
server.get("/auctions", ahQueryController.get);
//# sourceMappingURL=server.js.map