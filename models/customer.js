const mongoose= require('mongoose');
//customers data schema
const customerSchema=new mongoose.Schema({
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true

    },
    name:{
        type: String,
        required:true

    },
preference:{
        type: String,
        required:true

    },


postsId :[{
        content:{type: String,},
        id:{type: String,},
        price:{type: Number,}

    }]


}, 


{
    timestamps:true

});
const Customer= mongoose.model('Customer',customerSchema);

module.exports=Customer;