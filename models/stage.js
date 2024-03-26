'use strict'
const {
  Model, Deferrable
} = require('sequelize');

const Location = require('./location')
module.exports = (sequelize, DataTypes) => {
  class Stage extends Model {
    static associate(models) {
    } 
  }
  Stage.init({
    stage_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    stage_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    location_id: {
      type:DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Location,
        key: 'location_id',
        deferrable: Deferrable.INITIALLY_IMMEDIATE
      }
    }
  }, {
    sequelize,
    modelName: 'Stage',
    tableName: 'stages',
    timestamps: false
  })
  return Stage
}