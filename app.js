/// <reference path="./typings/tsd.d.ts"/>
/// <reference path="./controllers/AhQueryController.ts"/>
var AhQueryController_1 = require("./controllers/AhQueryController");
var restify = require('restify');
var server = restify.createServer();
server.use(restify.acceptParser(server.acceptable));
server.use(restify.queryParser());
server.use(restify.bodyParser());
server.listen(3000, function () {
    console.log("Server started @ 3000");
});
server.get("/products", AhQueryController_1.AhQueryController.get);
//# sourceMappingURL=app.js.map