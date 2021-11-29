const { Sequelize } = require('sequelize');

// Initialize sequelize
//TODO - Change the database name and password
// const db = new Sequelize("postgres://postgres:[PASSWORDchangeHERE]@localhost:5432/[DATABASEnameHERE]");
//! |  How to:  |
//! |  Activate your database profile. |
//* To activate your databate profile, comment out the appropriate line below under line 10:"DATABASE CONFIGURATION PROFILES"

//! |  DATABASE CONFIGURATION PROFILES  |
//* Adam's GamingTower
//const db = new Sequelize("postgres://postgres:5d170bf185294620b01d4a0dbda02af1@localhost:5432/teamBluePern");
//* Jaylens database
//const db = new Sequelize("postgres://postgres:562613@localhost:5432/teamBluePern");
//* Alex's Main PC
//const db = new Sequelize("postgres://postgres:46acef601cb74c059efd3b9e39e23e9e@localhost:5432/teamBluePern");
//* Alex's Old Dusty Dell Laptop
// const db = new Sequelize("postgres://postgres:gamersriseup@localhost:5432/teamBluePern");
//* Alex's Aero Laptop
// const db = new Sequelize("postgres://postgres:gamersriseup@localhost:5432/teamBluePern");

module.exports = db;