const express=require('express');


const passport=require('passport');

const router=express.Router();

const postController=require('../controllers/post_controller');



router.post('/create/:id',postController.create);


router.get('/destroy/:id1/:id2',postController.destroy);


module.exports=router;