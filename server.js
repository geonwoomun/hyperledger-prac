const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

const bodyParser = require("body-parser");
const cors = require("cors");
const passport = require("passport");
const Users = require("./routes/Users");
const Coins = require("./routes/Coins");
const Groups = require("./routes/Groups");
const Program = require("./routes/Programs");
const fileUpload = require("express-fileupload");

//Hyperledger Bridge
const { FileSystemWallet, Gateway } = require("fabric-network"); // fabric sdk
const fs = require("fs");
const path = require("path");
const ccpPath = path.resolve(
  __dirname,
  "..",
  "..",
  "..",
  "basic-network",
  "connection.json"
); 
const ccpJSON = fs.readFileSync(ccpPath, "utf8");
const ccp = JSON.parse(ccpJSON);
//
require("./config/passport");
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(fileUpload()); // 파일 업로드를 사용할 수 있게 설정.

app.use(passport.initialize());

app.get("/api", (req, res) => {
  res.send("홈 입니다.");
});
app.use("/api/user", Users); // user 관련 
app.use("/api/coin", Coins); // coin 관련
app.use("/api/group", Groups); // group 관련
app.use("/api/pro", Program); // program 관련

// hyperledger


app.post("/api/donacoin/", async function(req, res) { // 돈 기부 할 때 실행 되게 할 코드, /api/donacoin 주소로 요청 할 시.
  try {
    var campno = req.body.campno;

    var donacoin = req.body.donacoin;

    var username = req.body.username;

    // Create a new file system based wallet for managing identities.

    const walletPath = path.join(process.cwd(), "..", "wallet");  // wallet의 위치를 파악

    const wallet = new FileSystemWallet(walletPath);

    console.log(`Wallet path: ${walletPath}`); // walletPath가 어디로 지정되어있는지 확인

    // Check to see if we've already enrolled the user.

    const userExists = await wallet.exists("user1"); // user 1이 존재하는지 

    if (!userExists) { // 존재하지 않으면 밑의 글 출력하며 종료
      console.log(
        'An identity for the user "user1" does not exist in the wallet'
      );

      console.log("Run the registerUser.js application before retrying");

      return;
    }

    // Create a new gateway for connecting to our peer node.

    const gateway = new Gateway(); // network를 연결할 gateway를 만듦.

    await gateway.connect(ccp, { // gateway 연결.
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

    console.log(campno, donacoin, username);

    await contract.submitTransaction( // donacoin이라는 함수를 그 다음의 인자들과 함께 실행한다.
      "donacoin",
      campno,
      donacoin,
      username
    );

    console.log("Transaction has been submitted");

    // Disconnect from the gateway.

    await gateway.disconnect(); // 연결 종료

    // res.status(200).json({response: 'Transaction has been submitted'})

    res.send(
        "success"
    ); // 성공하면 react에서 페이지 전환.

    // res.redirect('/')
  } catch (error) {
    console.error(`Failed to submit transaction: ${error}`);

    res.status(400).json(error);
  }
});

app.get("/api/querycamp", async (req, res) => {  // 캠페인 조회
  const walletPath = path.join(process.cwd(),"..", "wallet");
  const wallet = new FileSystemWallet(walletPath);
  console.log(`Wallet path : ${walletPath}`);

  const userExists = await wallet.exists("user1");

  if (!userExists) {
    console.log(
      'An idendity for the user "user1" does not exist in the wallet'
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
  const contract = network.getContract("example");

  //Evaluate the specified transaction
  // queryCar transaction - requires 1 argument, ex: ('queryCar', 'CAR4')
  // queryAllCars transaction - requires no arguments, ex: ('queryAllCars')

  const result = await contract.evaluateTransaction("query");
  console.log(`Transaction has benn evaluated, result is ${result.toString()}`);

  let obj = JSON.parse(result.toString());

  res.send(obj); // 이 것을 react에서 써먹으면 될듯
});



app.post("/api/createcamp/", async function(req, res) { // 캠페인 생성
  try {
    var campno = req.body.campno;

    var campname = req.body.campname;

    var orgname = req.body.orgname;

    var target = req.body.target;

    // Create a new file system based wallet for managing identities.

    const walletPath = path.join(process.cwd(), "..", "wallet");

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

    console.log(campno, campname, orgname, target);

    await contract.submitTransaction(
      "newCampaign",
      campno,
      campname,
      orgname,
      target
    );

    console.log("Transaction has been submitted");

    // Disconnect from the gateway.

    await gateway.disconnect();

    // res.status(200).json({response: 'Transaction has been submitted'})

    res.send(
        "success"
    ); // 성공하면 react에서 페이지 전환.

    // res.redirect('/')
  } catch (error) {
    console.error(`Failed to submit transaction: ${error}`);

    res.status(400).json(error);
  }
});

// query all car
app.get("/api/queryallcars", async (req, res) => {
  const walletPath = path.join(process.cwd(),"..", "wallet");
  const wallet = new FileSystemWallet(walletPath);
  console.log(`Wallet path : ${walletPath}`);

  const userExists = await wallet.exists("user1");

  if (!userExists) {
    console.log(
      'An idendity for the user "user1" does not exist in the wallet'
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
  const contract = network.getContract("fabcar");

  //Evaluate the specified transaction
  // queryCar transaction - requires 1 argument, ex: ('queryCar', 'CAR4')
  // queryAllCars transaction - requires no arguments, ex: ('queryAllCars')

  const result = await contract.evaluateTransaction("queryAllCars");
  console.log(`Transaction has benn evaluated, result is ${result.toString()}`);

  let obj = JSON.parse(result.toString());

  res.send(obj); // 이 것을 react에서 써먹으면 될듯
});

// query car handle
// localhost:8080/api/querycar?carno=CAR10

app.get("/api/queryonecar/", async (req, res) => {
  try {
    var carno = req.query.carno;
    console.log(carno);

    // Create a new file system based wallet for managing identities.

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

    const contract = network.getContract("fabcar");

    // Evaluate the specified transaction.

    // queryCar transaction - requires 1 argument, ex: ('queryCar', 'CAR4')

    const result = await contract.evaluateTransaction("queryCar", carno);

    console.log(
      `Transaction has been evaluated, result is: ${result.toString()}`
    );

    // res.status(200).json({response: result.toString()})

    var obj = JSON.parse(result.toString());

    res.send(obj); // 이거 써먹어야함
  } catch (error) {
    console.error(`Faile to evaluate transaction: ${error}`);
    res.status(400).json(error);
  }
});

// Create car handle

app.post("/api/createcar/", async function(req, res) {
  try {
    var carno = req.body.carno;

    var colour = req.body.colour;

    var make = req.body.make;

    var model = req.body.model;

    var owner = req.body.owner;

    // Create a new file system based wallet for managing identities.

    const walletPath = path.join(process.cwd(), "..", "wallet");

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
    console.dir("gateway 확인" + gateway)
    // Get the network (channel) our contract is deployed to.

    const network = await gateway.getNetwork("mychannel");
    console.dir("network 확인" + network)
    console.dir("network 함수 확인" + network.getContract);
    // Get the contract from the network.

    const contract = network.getContract("fabcar");
    console.dir(contract);
    // Submit the specified transaction.

    // createCar transaction - requires 5 argument, ex: ('createCar', 'CAR12', 'Honda', 'Accord', 'Black', 'Tom')

    // changeCarOwner transaction - requires 2 args , ex: ('changeCarOwner', 'CAR10', 'Dave')

    //        await contract.submitTransaction('createCar', 'CAR11', 'Hnda', 'Aord', 'Bla', 'Tom')

    console.log(carno, make, model, colour, owner);

    await contract.submitTransaction(
      "createCar",
      carno,
      make,
      model,
      colour,
      owner
    );

    console.log("Transaction has been submitted");

    // Disconnect from the gateway.

    await gateway.disconnect();

    // res.status(200).json({response: 'Transaction has been submitted'})

    res.send(
        "success"
    ); // 성공하면 react에서 페이지 전환.

    // res.redirect('/')
  } catch (error) {
    console.error(`Failed to submit transaction: ${error}`);

    res.status(400).json(error);
  }
});

// Change car owner handle

app.put('/api/changeowner/', async function (req, res) {

    try {

        var carno = req.body.carno

        var owner = req.body.owner

 

        // Create a new file system based wallet for managing identities.

        const walletPath = path.join(process.cwd(), '..', 'wallet')

        const wallet = new FileSystemWallet(walletPath);

        console.log(`Wallet path: ${walletPath}`);

 

        // Check to see if we've already enrolled the user.

        const userExists = await wallet.exists('user1');

        if (!userExists) {

            console.log('An identity for the user "user1" does not exist in the wallet');

            console.log('Run the registerUser.js application before retrying');

            return;

        }

 

        // Create a new gateway for connecting to our peer node.

        const gateway = new Gateway();

        await gateway.connect(ccp, { wallet, identity: 'user1', discovery: { enabled: false } });
    
 

        // Get the network (channel) our contract is deployed to.

        const network = await gateway.getNetwork('mychannel');

 

        // Get the contract from the network.
        const contract = network.getContract('fabcar');

 

        // Submit the specified transaction.

        // createCar transaction - requires 5 argument, ex: ('createCar', 'CAR12', 'Honda', 'Accord', 'Black', 'Tom')

        // changeCarOwner transaction - requires 2 args , ex: ('changeCarOwner', 'CAR10', 'Dave')

//        await contract.submitTransaction('createCar', 'CAR11', 'Hnda', 'Aord', 'Bla', 'Tom');

        await contract.submitTransaction('changeCarOwner', carno, owner);

        console.log('Transaction has been submitted');

 

        // Disconnect from the gateway.

        await gateway.disconnect();

        // res.status(200).json({response: 'Transaction has been submitted'});

        res.send('success')// 성공하면 react에서 페이지 전환을 합시다.

        // res.redirect('/')

    } catch (error) {

        console.error(`Failed to submit transaction: ${error}`);

        res.status(400).json(error);

    }  

})




app.listen(port, () => {
  console.log(port + "서버가 열렸습니다.");
});
