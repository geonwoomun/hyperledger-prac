const Sequelize = require('sequelize');
const db = require('../database/db');
const prolist = require('./prolist');
const userDonaList = require('./userDonaList');
const User = db.sequelize.define(
    'user',  // 유저 테이블
    {
        email : {
            type : Sequelize.STRING,
            primaryKey : true,
        },
        PASSWORD: {
            type: Sequelize.STRING,
        },
        name : {
            type: Sequelize.STRING,   
        },
        phoneNumber : {
            type : Sequelize.STRING
        },
        birth : {
            type : Sequelize.DATE,
        },
        coin : { // 현재코인
            type : Sequelize.INTEGER,
            defaultValue : 0
        },
        allCoin : { // 총 후원 코인
            type: Sequelize.INTEGER,
            defaultValue: 0
        },
        userType : {
            type : Sequelize.INTEGER,
            defaultValue : 0
        },
        groupIntro : {
            type: Sequelize.STRING
        }
    },
    {
        timestamps: false
    }
)

User.hasMany(prolist, { foreignKey: 'userEmail', sourceKey: 'email' })
User.hasMany(userDonaList, { foreignKey:'email', sourceKey: 'email'});
module.exports = User;