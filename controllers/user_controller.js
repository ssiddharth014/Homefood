const User=require('../models/user');
const Post=require('../models/post');

module.exports.profile=function(req,res){

User.findById(req.params.id,function(err,user){


    if (user){
        return res.render('profile',{
            title:user.name,
            users:user
        });
    }

});

    
}
module.exports.destroy=function(req,res){
    User.findById(req.params.id,function(err,user){
        if (user){
            user.remove();

return res.render('user_sign_up',{
        title: "SIGN UP"
    });


        }
    });
}

module.exports.vieworders=function(req,res){

User.findById(req.params.id,function(err,user){


    if (user){
        return res.render('view_orders',{
            title:user.name,
            user:user,
            count:1
        });
    }

});

    
}





module.exports.signUp=function(req,res){

// if the user is already signin 
    if (req.isAuthenticated()){
        return res.redirect('/users/profile');
    }

    return res.render('user_sign_up',{
        title: "SIGN UP"
    });
}


module.exports.signIn=function(req,res){

// if the user is already signin 
    if (req.isAuthenticated()){
        return res.redirect('/users/profile');
    }

    return res.render('user_sign_in',{
        title: "SIGN IN"
    });
}



//creating a user
module.exports.create=function(req,res)
{

    if (req.body.password!=req.body.confirm_password)
    {
        res.redirect('back');
    }


    User.findOne({email:req.body.email},function(err,user){

        if (err){
            console.log('error in finding user in signing up');
            return}

            if (!user){
            User.create(req.body,function(err,user){
                if (err){console.log('error in  signing up');
                return}

                return res.redirect('/users/signIn');
            })
            }
            else{
                return res.redirect('back');
            }

    });
    
}


//create session

module.exports.createSession=function(req,res)
{
    return res.redirect('/');
}


// action for logging out
module.exports.destroySession=function(req,res){
    req.logout();
    return res.redirect('/');
}

