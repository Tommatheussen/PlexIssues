"use strict";

module.exports = function (sequelize, DataTypes) {
  var Settings = sequelize.define("Settings", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    hostname: {
      type: DataTypes.STRING,
      required: true
    },
    port: {
      type: DataTypes.INTEGER,
      required: true
    },
    login: {
      type: DataTypes.BOOLEAN,
      required: true,
      default: false
    }
  }, { timestamps: false });

  return Settings;
}