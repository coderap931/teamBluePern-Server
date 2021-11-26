const {Sequelize} = require('sequelize');

// Initialize sequelize
//TODO - Change the database name and password
// const db = new Sequelize("postgres://postgres:[PASSWORDchangeHERE]@localhost:5432/[DATABASEnameHERE]");
//! |  ACTIVE SEQUELIZE PROFILE  |
const db = new Sequelize("postgres://postgres:gamersriseup@localhost:5432/teamBluePern");
// ______________________________
// |                              |
//! |  DATABASE DIFFERENT CONFIGURATIONS   |
//* Alex's Dell Laptop
// const db = new Sequelize("postgres://postgres:gamersriseup@localhost:5432/teamBluePern");
//* Alex's Aero Laptop
// const db = new Sequelize("postgres://postgres:gamersriseup@localhost:5432/teamBluePern");



module.exports = db;