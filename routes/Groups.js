const express = require("express");
const Groups = express.Router();
const User = require("../models/User");


Groups.get('/getAllGroup', (req, res) => { // 모든 그룹 보내줄 때
  User.findAll({
    attributes: ["name", "phoneNumber", "groupIntro"],
    where : {
      userType : 1
    }
  })
  .then(result => {
    res.send(result);
  })
  .catch(err => {
    console.error(err);
  })
})

Groups.post("/modifyInfo", (req, res) => { // 그룹 소개 정보 수정할 때
  const { email, groupIntro } = req.body;

  User.update(
    {
      groupIntro
    },
    {
      where: {
        email: email
      }
    }
  ).then(result => {
    res.send(result);
  })
  .catch(err =>{
    console.error(err);
  });
});

Groups.get('/getGroupInfo/:email', (req, res) => { // 이메일을 통해 그 그룹의 소개를 가져 올 때
  const { email } = req.params;

  User.findOne({
    attributes : ["groupIntro"],
    where : {
      email
    }
  })
  .then(result => {
    res.send(result);
  })
  .catch(err => {
    console.error(err);
  })
})
module.exports = Groups;
