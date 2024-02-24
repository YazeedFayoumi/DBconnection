const {MongoClient}= require('mongodb')
 
const connection="mongodb+srv://yazeedfayoumi:EO7sN8WXMbjxNjOj@atlascluster.kgxlft7.mongodb.net/?retryWrites=true&w=majority&appName=AtlasCluster"

const client= new MongoClient(connection)

const mydb= client.db('testnode')  

const collection= mydb.collection('users') 

const express = require("express");
// const cors = require("cors");
const app = express();

// app.use(cors());
app.use(express.json());

app.get("/", async(req, res) => { // async function
  res.json({ message: "Start server" });
});

app.get("/getAllUsers", async(req, res) => {
    const users= await collection.find({}).toArray() 
     res.send(users)
    
  });

app.get("/getUser/:Username", async(req, res) => {// same as key as in db 
    const users= await collection.findOne({'username':req.params.username}) 
    res.send(users)
});

app.listen(8004, () => {
  console.log(`Server is running on port 8004.`);
});

