 const mongoose= require('mongoose');
const URL="mongodb+srv://dbuser:dbuser@cluster0-w0xwb.mongodb.net/test?retryWrites=true&w=majority";

const db=async() =>{
await mongoose.connect(URL,{useUnifiedTopology:true,useNewUrlParser:true})
console.log('connected..');
}



module.exports=db;


