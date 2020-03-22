const Post=require('../models/post');
const Customer=require('../models/customer');
const User=require('../models/user');
module.exports.signUp=function(req,res){

    return res.render('customer_sign_up',{
        title: "SIGN UP"
    });
}



module.exports.signIn=function(req,res){

// if the user is already signin 
  // if (req.isAuthenticated()){
    //   return res.redirect('/customers/profile');
    //}

    return res.render('customer_sign_in',{
        title: "SIGN IN"
    });
}
module.exports.create=function(req,res)
{

    if (req.body.password!=req.body.confirm_password)
    {
        res.redirect('back');
    }


    Customer.findOne({email:req.body.email},function(err,customer){

        if (err){
            console.log('error in finding user in signing up');
            return}

            if (!customer){
            Customer.create(req.body,function(err,customer){
                if (err){console.log('error in  signing up');
                return}

                return res.redirect('/customers/signIn');
            })
            }
            else{
                return res.redirect('back');
            }

    });
    
}


module.exports.profile=function(req,res){

                         Customer.findById(req.params.id,function(err,customer)
                         {
                             if (customer.id==req.params.id){

                        return res.render('customer_profile',{ title:"CONSUMER",
			                                         customer:customer,count:1

});
}
else{
	return res.render('customer_sign_in',{
		title:"SIGN_UP",
	});
}
});
}

module.exports.order=function(req,res){



Post.findById(req.params.id1,function(err,posts){
    

               if (posts.id==req.params.id1){


                         Customer.findById(req.params.id2,function(err,customer)
                         {
                             if (customer.id==req.params.id2){
                                    



if(customer){
	console.log(customer.name);
	customer.postsId.push({id:req.params.id3,content:posts.content,price:posts.price});
	customer.save();

User.findById(req.params.id4,function(err,user){
	if(user.id==req.params.id4)
	{
		console.log(user.name);



		user.customersid.push({id:customer.name,content:posts.content,price:posts.price});

		user.save();
	}
});











}




                                   
                                console.log('order placed');



                              
		                          return res.render('customer_profile',{
			                                         title:"CONSUMER",
			                                         count:1,
			                                         customer:customer
		                                        });
     
                           


                             }
                             

                              else{
                              	console.log('order not placed');
		                          return res.redirect('/');
                              }


                         });



               }
               else{
               	console.log('order not placed');
		                          return res.redirect('/');
               }

    });
}

/*module.exports.order=function(req,res){
	
	
			Customer.findById(req.params.id2,function(err,customer){
                  if (err){console.log('error');return;}
                  customer.Post.push({postsname:req.postname,username:req.username,postsprice:req.price});
                  customer.save();
                  //post.customers.push(customer);
                  //post.save();


                  return res.render('customer_profile',{
			                                         title:"CONSUMER",
			                                         count:-1,
			                                         customer:customer

		                                        });
			});
              
			}
		
*/
	


module.exports.createSession=function(req,res){
    // find a user and establish the identity

    Customer.findOne({email :req.body.email},function(err,customer){
        if(err){
            console.log('error in finding customer-->passport');
            return res.render('customer_sign_in',{title:"SignIn"});
        }
        if (!customer || customer.password !=req.body.password){
            console.log('invalid  customer username/password');
            return res.render('customer_sign_in',{title:"SignIn"});
        }
         

        Post.find({}).populate('user').exec(function(err,posts){

User.find({},function(err,users){






	return res.render('order',{
			"title":"CONSUMER",
			posts:posts,
			customer:customer,
			all_users:users
		});
});


		
    });

    });
}
module.exports.cancelorder=function(req,res){



 Customer.findById(req.params.id1,function(err,customer)
                         {

console.log("1");

                             if (customer.id==req.params.id1 )
                             	{
                             	console.log('2');
                    
                    for (orderDetails of customer.postsId){

console.log("3");


                      if (req.body.orderContent==orderDetails.content  && req.body.orderId==orderDetails.id)

                        {

                           console.log(orderDetails.content);

                            //orderDetails.remove();
                          //  console.log(orderDetails.content);
                        }

                      
                      return res.render('customer_sign_in',{
                        title:'SIGN_IN'
                      });

                    }




                                            	

                                            
                                            }
                 			
                             		
	});
}




// action for logging out
module.exports.destroySession=function(req,res){
    req.logout();
    return res.redirect('/');
}




