// Establish the connection to the database
const {Sequelize} = require ('sequelize')
require('dotenv').config()


const dbURL = process.env.DB_URL;

const sequelize = new Sequelize(dbURL);

sequelize
  .authenticate()
  .then(() => {
    console.log('Database connection has been established successfully.');
  })
  .catch((error) => {
    console.error('Unable to connect to the database:', error);
  });

module.exports = sequelize;