import { Sequelize, DataTypes } from "sequelize";
import { sequelize } from "../database/connection.js";

export const RecycleInfoEntity = sequelize.define("RecycleInfos", {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: Sequelize.UUIDV4,
    allowNull: false
  },
  title: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },

  content: {
    type: DataTypes.STRING(2000),
    allowNull: false,
  },
});