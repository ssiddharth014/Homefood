//1
const express=require('express');

//2
const router=express.Router();

//4
const homeController=require('../controllers/home_controller');





//5
router.get('/',homeController.home);

//6
router.use('/users',require('./user'));
router.use('/posts',require('./post'));
router.use('/customers',require('./customer'));

module.exports=router;