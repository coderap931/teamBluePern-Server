const { Sequelize } = require('sequelize');

//* Initialize sequelize

//! |  How to:  |
//! |  Activate your database profile. |
//TODO To activate your databate profile, call in the correct database profile via "process.env.${const of your database password}"
//TODO When done for the day, replace line 10 of this file with line 9 uncommented. This allows us to not constantly resolve conflicts when merging.
// const db = new Sequelize(`postgres://postgres:${process.env.****password for your database****}@localhost:5432/${process.env.dbName}`);
const db = new Sequelize(`postgres://postgres:${process.env.AlexMainPW}@localhost:5432/${process.env.dbName}`);

//! |  DATABASE CONFIGURATION PROFILES  |
//TODO - Profiles have moved to our .env file!
//* Reference the .env to determine which profile to use.

module.exports = db;