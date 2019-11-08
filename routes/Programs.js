const express = require('express');
const Programs = express.Router();
const prolist = require('../models/prolist');
const Sequelize = require('sequelize');
// const upload = require('./fileUpload');
// const multer = require('multer');

//Hyperledger Bridge
const { FileSystemWallet, Gateway } = require("fabric-network");
const fs = require("fs");
const path = require("path");
const ccpPath = path.resolve(
  __dirname,
  "..",
  "..",
  "..",
  "..",
  "basic-network",
  "connection.json"
); // 바꿔야함
const ccpJSON = fs.readFileSync(ccpPath, "utf8");
const ccp = JSON.parse(ccpJSON);

Programs.post('/uploadImg', (req, res) =>{
    if(req.files === null){
        return res.status(400).json({msg: 'No files upload'})
    }
    const file = req.files.file;
    // const fileType = req.files.file.mimetype.split('/')[1]
    const fileName = req.body.fileName;

    file.mv(`${__dirname}/../ui/public/uploads/${fileName}`, err => {
        if(err){
            console.error(err);
            return res.status(500).send(err);
        }

        res.json({fileName : fileName, filePath:`/uploads/${fileName}`})
    })
})

Programs.post('/register', async (req, res) => {  // 프로그램 등록
    try{
    let { proName, proDesc, targetCoin, targetDate, userEmail, proImgName} = req.body; // 프로그램제목, 설명, 목표코인, 마감날짜, 유저 이메일을 받는다.
    const proImg = proImgName;
    const program = {
        proName,
        proDesc,
        targetCoin,
        targetDate,
        userEmail,
        proImg
    }
    prolist.create(
        program
    )
    .then(async (results) => {
    const proNum = ""+results.proNum 

    const walletPath = path.join(process.cwd(),"..", "wallet");

    const wallet = new FileSystemWallet(walletPath);

    console.log(`Wallet path: ${walletPath}`);

    // Check to see if we've already enrolled the user.

    const userExists = await wallet.exists("user1");

    if (!userExists) {
      console.log(
        'An identity for the user "user1" does not exist in the wallet'
      );

      console.log("Run the registerUser.js application before retrying");

      return;
    }

    // Create a new gateway for connecting to our peer node.

    const gateway = new Gateway();

    await gateway.connect(ccp, {
      wallet,
      identity: "user1",
      discovery: { enabled: false }
    });
    // Get the network (channel) our contract is deployed to.

    const network = await gateway.getNetwork("mychannel");
    // Get the contract from the network.

    const contract = network.getContract("example");
    // Submit the specified transaction.

    // createCar transaction - requires 5 argument, ex: ('createCar', 'CAR12', 'Honda', 'Accord', 'Black', 'Tom')

    // changeCarOwner transaction - requires 2 args , ex: ('changeCarOwner', 'CAR10', 'Dave')

    //        await contract.submitTransaction('createCar', 'CAR11', 'Hnda', 'Aord', 'Bla', 'Tom')

    console.log(proNum, proName, userEmail, targetCoin);

    await contract.submitTransaction(
      "newCampaign",
      proNum,
      proName,
      userEmail,
      targetCoin
    );

    console.log("Transaction has been submitted");

    // Disconnect from the gateway.

    await gateway.disconnect();

    // res.status(200).json({response: 'Transaction has been submitted'})

    res.send(
        "success"
    ); // 성공하면 react에서 페이지 전환.

        res.send(results);
    })
    .catch(err => {
        console.error(err);
    })
    }
    catch (error){
        console.error(`Failed to submit transaction: ${error}`);

        res.status(400).json(error);
    }
    
});

Programs.get('/getAllPrograms', (req, res) => { // 모든 프로그램 가져오기
    prolist.findAll({
    })
    .then(programs => {
        res.json(programs)
    })
    .catch(err => {
        console.error(err);
    })
})


Programs.get('/getAllProgramsID/:email', (req, res) => { // 이메일을 가지고 그 이메일이 만든 프로그램을 다 가져옴.
    const userEmail = req.params.email;
    
    prolist.findAll({
        where : {
            userEmail
        }
    })
    .then(program => {
        res.json(program)
    })
    .catch(err=> {
        console.error(err);
    })
})

Programs.get('/getNumProgram/:proNum', (req, res) => {
    const { proNum } = req.params;

    prolist.findOne({
        where : {
            proNum
        }
    })
    .then(program => {
        res.json(program)
    })
    .catch(err => {
        console.error(err);
    })
})

Programs.post('/donateCoin', (req, res) => { // 코인 후원 할 때 더 할 함수.
    const { proNum, coin } = req.body;
    prolist.update({
        nowCoin : Sequelize.literal("nowCoin +" + coin)
    },
        {
        where : {
            proNum
        }
    })
    .then(result => {
        res.send('완료')
    })
    .catch(err => {
        console.error(err);
    })
})

module.exports = Programs;