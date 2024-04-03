import { Sequelize, DataTypes } from "sequelize";
import { sequelize } from "../database/connection.js";

export const CompanyEntity = sequelize.define("Companies", {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    street: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    municipality: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    zipCode: {
        type: DataTypes.STRING(8),
        allowNull: false
    },
    neighborhood: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    state: {
        type: DataTypes.STRING(2),
        allowNull: false
    },
    companyImg: {
        type: DataTypes.STRING(500)
    }
});