var AhQueryController = (function () {
    function AhQueryController() {
    }
    AhQueryController.get = function (req, res, next) {
        console.log("AhQueryController GET");
        res.send("w00t");
        return next();
    };
    return AhQueryController;
})();
exports.AhQueryController = AhQueryController;
//# sourceMappingURL=AhQueryController.js.map