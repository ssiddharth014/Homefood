const Post=require('../models/post');
const User=require('../models/user');
const db=require('../config/mongoose');
module.exports.home=function(req,res){


	Post.find({}).populate('user').exec(function(err,posts){


User.find({},function(err,users){




		return res.render('home',{
			"title":"HOME",
			posts:posts,
			all_users:users
		});

});


});
}