const Sequelize = require('sequelize');
const database = require('../database.js').database;

let Issue = database.define('issue', {
  type: Sequelize.STRING,
  description: Sequelize.TEXT
});

module.exports = {
  Issue: Issue
}