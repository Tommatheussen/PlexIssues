const Sequelize = require('sequelize');

let database = new Sequelize('plexissues', null, null, {
  dialect: 'sqlite',
  storage: 'plexissues.sqlite',
  typeValidation: true
});

module.exports = {
  database: database
}