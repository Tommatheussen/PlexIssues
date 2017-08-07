'use strict';

var fs = require('fs');
var path = require('path');
var Sequelize = require('sequelize');
var env = process.env.NODE_ENV || 'development';
var config = require('../config/database.json')[env];

if (env === 'production') {
  config.storage = path.join(path.dirname(process.execPath), config.storage);
}

config.typeValidation = true;
config.logging = (env == 'development' ? function (string, val) { console.log(string); } : false);

var sequelize = new Sequelize(config.database, null, null, config);

var db = {};

fs.readdirSync(__dirname)
  .filter(function (file) {
    return (file.indexOf(".") !== 0) && (file !== "index.js");
  })
  .forEach(function (file) {
    var model = sequelize.import(path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(function (modelName) {
  if ("accociate" in db[modelName]) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
