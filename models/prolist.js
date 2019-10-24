const Sequelize = require('sequelize');
const db = require('../database/db');

const prolist = db.sequelize.define(
    'prolist',
    {
        proNum : {
            type : Sequelize.INTEGER,
            primaryKey : true,
            autoIncrement : true
        },
        proDesc: {
            type: Sequelize.STRING,
        },
        proName : {
            type: Sequelize.STRING,   
        },
        proImg : {
            type : Sequelize.STRING,
        },
        targetCoin : {
            type : Sequelize.INTEGER
        },
        nowCoin : {
            type : Sequelize.INTEGER,
            defaultValue : 0
        },
        pass : {
            type : Sequelize.INTEGER,
            defaultValue : 0
        },
        targetDate : {
            type : Sequelize.DATE
        },
        donateCount : {
            type : Sequelize.INTEGER,
            defaultValue : 0
        },
        userEmail : {
            type : Sequelize.STRING
        }
    },
    {
        timestamps: false
    }
)

module.exports = prolist;