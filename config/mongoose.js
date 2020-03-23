 const mongoose= require('mongoose');
const URL="mongodb+srv://dbuser:dbuser@cluster0-w0xwb.mongodb.net/test?retryWrites=true&w=majority";
mongoose.connect('mongodb://localhost/social-house__development');

const db=async() =>{
await mongoose.connect(URL,{userUnifiedTopology:true,useNewUrlParser:true})
console.log('connected..');
}



module.exports=db;



/*

const MongoClient = require('mongoose');
const uri = "mongodb+srv://dbuser:dbuser@cluster0-w0xwb.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});
module.exports=client;
*/