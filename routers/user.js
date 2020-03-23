
//1
const express=require('express');

//6
const passport=require('passport');
//2
const router=express.Router();

//4
const usersController=require('../controllers/user_controller');



//5
//making profile page accessible only when a user is signed in
//router.get('/profile',usersController.profile);-> if this is used profile page is aacessible even when a user is not signed in

router.get('/profile/:id',usersController.profile);

router.get('/vieworders/:id',usersController.vieworders);

router.get('/signUp',usersController.signUp);
router.get('/signIn',usersController.signIn);


router.post('/create',usersController.create);

router.get('/destroy',usersController.destroy);


router.post('/create-session',passport.authenticate("local",
{failureRedirect :'/users/signIn'}),
usersController.createSession
);



// logout route
router.get('/signOut',usersController.destroySession);
//router.get('/signOut',usersController.destroySession);

module.exports=router;