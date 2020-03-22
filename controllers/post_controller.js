const Post=require('../models/post');
const User=require('../models/user');

module.exports.create=function(req,res){
	Post.create({
		content:req.body.content,
		price:req.body.price,
		user:req.user._id
	},
	function(err,post){
		if (err){console.log('error');return;}
         

User.findById(req.user._id,function(err,user){


	if(user){
		
			user.postid.push( {_id:post.id,content:req.body.content,price:req.body.price});
			user.save();
		}
	});

});

		return res.redirect('back');
	
}


module.exports.destroy=function(req,res){
	Post.findById(req.params.id,function(err,post){
		if(post){

		post.remove();
		return res.redirect('back');
	}
	else
	{
		return res.redirect('back');
	}
	});
	
}

