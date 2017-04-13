const Sequelize = require('sequelize');

let database = new Sequelize('plexissues', null, null, {
  dialect: 'sqlite',
  storage: 'plexissues.sqlite'
});

module.exports = {
  database: database
}