//restaurant schema

const mongoose= require('mongoose');

const userSchema=new mongoose.Schema({
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

    },

    postid :[{
        content:{type: String,},
        price:{type: Number,}


    }],
    customersid :[{
        content:{type: String,},
        id:{type: String,},
        price:{type: Number,}

    }]


}, {
    timestamps:true

});
const User= mongoose.model('User',userSchema);

module.exports=User;