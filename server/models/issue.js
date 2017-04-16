const Sequelize = require('sequelize');
const database = require('../database.js').database;

let schema = {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  type: {
    type: Sequelize.STRING,
    allowNull: false
  },
  item: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.TEXT
  },
  status: {
    type: Sequelize.ENUM,
    values: ['new', 'confirmed', 'rejected', 'pending', 'done'],
    defaultValue: 'new',
    allowNull: false
  },
  openDate: {
    field: 'open_date',
    type: Sequelize.DATE,
    defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
  }
};

let Issue = database.define('issue', schema, {
  timestamps: false
});

Issue.sync().then(res => {}, err => {
  console.log('Failed to create table:', err);
});

module.exports = Issue