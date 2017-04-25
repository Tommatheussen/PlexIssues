"use strict";

module.exports = function (sequelize, DataTypes) {
  var Settings = sequelize.define("Settings", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      required: true
    },
    value: {
      type: DataTypes.STRING,
      required: true
    }
  }, { timestamps: false });

  return Settings;
}