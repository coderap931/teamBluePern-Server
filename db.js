const { Sequelize } = require('sequelize');

// Initialize sequelize

//! |  How to:  |
//! |  Activate your database profile. |
//TODO To activate your databate profile, uncomment the appropriate line below under line 10:"DATABASE CONFIGURATION PROFILES"
//TODO When done for the day, comment out the line again. This allows us to not constantly resolve conflicts when merging.

//! |  DATABASE CONFIGURATION PROFILES  |
//TODO - Uncomment your profile you're using.

//! ADAM
//* Adam's GamingTower
//const db = new Sequelize("postgres://postgres:5d170bf185294620b01d4a0dbda02af1@localhost:5432/teamBluePern");

//! ALEX
//* Alex's Main PC
//const db = new Sequelize("postgres://postgres:46acef601cb74c059efd3b9e39e23e9e@localhost:5432/teamBluePern");
//* Alex's Old Dusty Dell Laptop
// const db = new Sequelize("postgres://postgres:gamersriseup@localhost:5432/teamBluePern");
//* Alex's Aero Laptop
// const db = new Sequelize("postgres://postgres:gamersriseup@localhost:5432/teamBluePern");

//! JAYLEN
//* Jaylens database
//const db = new Sequelize("postgres://postgres:562613@localhost:5432/teamBluePern");

module.exports = db;