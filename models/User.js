const Sequelize = require('sequelize');
const db = require('../database/db');
const prolist = require('./prolist');
const User = db.sequelize.define(
    'user',
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
        coin : {
            type : Sequelize.INTEGER,
            defaultValue : 0
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

module.exports = User;