"use strict";

module.exports = function (sequelize, DataTypes) {
  var Issue = sequelize.define("Issue", {
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
  }, { timestamps: false });

  return Issue;
}