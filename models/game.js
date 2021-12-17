const {DataTypes} = require('sequelize');
const db = require('../db');

const Game = db.define("game", {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    boxart: { //URL for picture for now, change to picture upload later if possible
        type: DataTypes.STRING(1000),
        allowNull: false,
    },
    gamedescription: {
        type: DataTypes.STRING(1000),
        allowNull: false,
    },
    esrbrating: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    reviewrating: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    reviewdescription: {
        type: DataTypes.STRING(1000),
        allowNull: false,
    },
    platforms: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    tags: {
        type: DataTypes.STRING,
        allowNull: false,
        
    },
    owner_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }
})

module.exports = Game;