
//Food item schema
const mongoose= require('mongoose');

const multer= require('multer');
const path= require('path');
const AVATAR_PATH= path.join('/uploads/posts/avatar');

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

let storage=multer.diskStorage({
    destination: function(req,file,cb){
        cb(null,path.join(__dirname,'..',AVATAR_PATH));
    },
    filename: function(req,file,cb){
        cb(null,file.fieldname + '-' + Date.now());
    }
});
postSchema.statics.uploadedAvatar= multer({storage : storage}).single('avatar');
postSchema.statics.avatarPath= AVATAR_PATH;


const Post= mongoose.model('Post',postSchema);

module.exports=Post;