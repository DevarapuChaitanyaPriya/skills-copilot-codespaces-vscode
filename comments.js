//create web server 
const express =require('express');
const router =express.Router();
const commentController=require('../controllers/comment')
router.get('/',commentController.comment_list);