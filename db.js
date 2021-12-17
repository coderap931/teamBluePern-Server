const { Sequelize } = require('sequelize');

//! |  How to:  |
//! |  Switch between the Heroku Database and Localhost databse |
//*  
//! HEROKU DATABASE
//TODO: Enable Heroku database by uncommenting the following object.
const db = new Sequelize(process.env.DATABASE_URL, {
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false
        }
    }
});
//TODO: Uncomment the Heroku Database before committing. Comment the Localhost Database. Message Adam for testing Heroku side(?) <-- Not sure how to incorporate Heroku test fully. 
//! END OF HEROKU DATABASE



//TODO LOCAL DATABASE
//!  START OF LOCAL DATABASE
// const db = new Sequelize(process.env.DATABASE_URL, {
//     dialect: 'postgres',
// });
//TODO Change back to Heroku Database before committing!
//! END OF LOCAL DATABASE

module.exports = db;