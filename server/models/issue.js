"use strict";

module.exports = function (sequelize, DataTypes) {
  var Issue = sequelize.define("Issue", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false
    },
    item: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT
    },
    status: {
      type: DataTypes.ENUM,
      values: ['new', 'confirmed', 'rejected', 'pending', 'done'],
      defaultValue: 'new',
      allowNull: false
    },
    openDate: {
      field: 'open_date',
      type: DataTypes.DATE,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, { timestamps: false });

  return Issue;
}