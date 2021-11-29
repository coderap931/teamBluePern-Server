const {Sequelize} = require('sequelize');

// Initialize sequelize
//TODO - Change the database name and password
// const db = new Sequelize("postgres://postgres:[PASSWORDchangeHERE]@localhost:5432/[DATABASEnameHERE]");
//! |  ACTIVE SEQUELIZE PROFILE  |
//* Adam's GamingTower
const db = new Sequelize("postgres://postgres:5d170bf185294620b01d4a0dbda02af1@localhost:5432/teamBluePern");
// ______________________________
// |                              |
//! |  DATABASE DIFFERENT CONFIGURATIONS   |
//* Alex's Dell Laptop
// const db = new Sequelize("postgres://postgres:gamersriseup@localhost:5432/teamBluePern");
//* Alex's Aero Laptop
// const db = new Sequelize("postgres://postgres:gamersriseup@localhost:5432/teamBluePern");



module.exports = db;