const Sequelize = require('sequelize');
const db = require('../database/db');
const userDonaList = require('./userDonaList');

const prolist = db.sequelize.define(
    'prolist', // 프로그램 리스트
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

prolist.hasMany(userDonaList, { foreignKey:'proNum', sourceKey: 'proNum'})

module.exports = prolist;