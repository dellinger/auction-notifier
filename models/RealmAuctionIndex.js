"use strict";

module.exports = function(sequelize, DataTypes) {
    var RealmAuctionIndex = sequelize.define("RealmAuctionIndex", {
        url: DataTypes.STRING,
        lastModified: DataTypes.DATE
    });
    return RealmAuctionIndex;
}