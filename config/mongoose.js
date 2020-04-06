 const mongoose= require('mongoose');
const URL="mongodb+srv://foodshalauser:foodshala@foodshalacluster-xsd3l.mongodb.net/test?retryWrites=true&w=majority";

const db=async() =>{
await mongoose.connect(URL,{useUnifiedTopology:true,useNewUrlParser:true})
console.log('connected..');
}



module.exports=db;


