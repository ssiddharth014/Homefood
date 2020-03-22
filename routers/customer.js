
const express=require('express');


const passport=require('passport');

const router=express.Router();

const customersController=require('../controllers/customer_controller');


router.get('/profile/:id',customersController.profile);

router.get('/signUp',customersController.signUp);
router.get('/signIn',customersController.signIn);


router.post('/create',customersController.create);


router.get('/cancelorder/:id1',customersController.cancelorder);

router.post('/create-session',customersController.createSession);

router.post('/order/:id1/:id2/:id3/:id4',customersController.order)
// logout route
router.get('/signOut',customersController.destroySession);

module.exports=router;