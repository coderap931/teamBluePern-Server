const { Sequelize } = require('sequelize');

//* Initialize sequelize

//! |  How to:  |
//! |  Activate your database profile. |
//TODO To activate your databate profile, call in the correct database profile via "process.env.${const of your database password}"
//TODO When done for the day, replace line 10 of this file with line 9 uncommented. This allows us to not constantly resolve conflicts when merging.
const db = new Sequelize(`postgres://postgres:${process.env.AdamPW}@localhost:5432/${process.env.dbName}`);
// const db = new Sequelize(process.env.DATABASE_URL, {
//     dialect: 'postgres',
//     dialectOptions: {
//         ssl: {
//             require: true,
//             rejectUnauthorized: false
//         }
//     }
// });

module.exports = db;