
//Food item schema
const mongoose= require('mongoose');



const postSchema=new mongoose.Schema({
    content:{
        type: String,
        required: true
    },


    price:{
        type: Number,
        required: true
    },
    avatar:{
        type:String
    },


   user :{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'

    },

    customers:[
    {
        type:mongoose.Schema.Types.ObjectId,
        ref:'Customer'
    
    }

    ]
    
}, {
    timestamps:true

});




const Post= mongoose.model('Post',postSchema);

module.exports=Post;