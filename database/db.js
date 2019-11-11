const Squelize = require('sequelize'); // JPA 비슷한 ORM
const db = {}
const sequelize = new Squelize('hanium', 
    'hanium', // hanium 이라는 DB에 hanium이라는 id로 비번 mypassword
    'mypassword',
{
    host : "haniumweb.cdxxehj8l1sk.ap-northeast-2.rds.amazonaws.com", // 연결 주소
    dialect : 'mysql', // db종류
    operatorsAliases: false,

    pool : {
        max:5,
        min:0,
        acquire: 30000,
        idel : 10000
    }
}
    
)

db.sequelize = sequelize;
db.Squelize = Squelize;

module.exports = db;