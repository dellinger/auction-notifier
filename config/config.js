/// <reference path="../typings/tsd.d.ts"/>
var nconf = require("nconf");
var Config = (function () {
    function Config() {
        var environment = process.env.NODE_ENV = process.env.NODE_ENV || "development";
        var configFile = __dirname + ("/" + environment + ".json");
        console.log("Using Config File " + configFile);
        nconf.file({ file: configFile });
    }
    Config.prototype.get = function (key) {
        var result = nconf.get(key);
        if (result) {
            console.log("Retrieved config " + key + " with value " + result);
        }
        else {
            throw new Error("Could not retrieve config property " + key + " with value " + result);
        }
        return result;
    };
    return Config;
})();
exports.Config = Config;
//# sourceMappingURL=config.js.map