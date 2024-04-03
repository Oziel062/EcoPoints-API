import { Sequelize } from "sequelize";
import 'dotenv/config';

const sequelize = new Sequelize(process.env.DB_URL)

async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

export { sequelize, testConnection }