const Sequelize = require('sequelize');
const sequelize = require('../db')

const players = sequelize.define('players', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true 
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    dateOfBirth: {
        type: Sequelize.DATE,
        allowNull: false
    },
    photoUrl: {
        type: Sequelize.STRING
    },
    Birthplace: {
        type: Sequelize.STRING,
        allowNull: false
    },
    Career: {
        type: Sequelize.STRING,
        allowNull: false
    },
    NumberOfMatches: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    Score: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    Fifties: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    Centuries: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    Wickets: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    Average: {
        type: Sequelize.INTEGER,
        allowNull: false
    },

})

module.exports = players;