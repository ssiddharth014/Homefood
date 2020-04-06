const Post=require('../models/post');
const User=require('../models/user');

module.exports.create=function(req,res){

	Post.uploadedAvatar(req,res,function(err){
	Post.create({
		content:req.body.content,
		price:req.body.price,
		user:req.params.id,
		avatar:Post.avatarPath + '/' + req.file.filename
	},
	function(err,post){
		if (err){console.log('error');return;}
         

User.findById(req.params.id,function(err,use){

console.log("user_found");
	if(use){
		console.log("user_found2");
			use.postid.push( {content:req.body.content,price:req.body.price});
			use.save();
		}


Post.find({}).populate('user').exec(function(err,posts){


User.find({},function(err,users){




        return res.render('home',{
            "title":"Restaurant",
            posts:posts,
            all_users:users,
            user:use
        });

});


});




	});
});


});

	












	
}


module.exports.destroy=function(req,res){
	Post.findById(req.params.id1,function(err,post){
		if(post){
        console.log("post_removed")
		post.remove();


User.findById(req.params.id2,function(err,use){
Post.find({}).populate('user').exec(function(err,posts){


User.find({},function(err,users){




        return res.render('home',{
            title:"Restaurant",
            posts:posts,
            all_users:users,
            user:use
        });

});


});
});


	}
	else
	{
		return res.redirect('back');
	}
	});
	
}

