const express = require('express');
const router = express.Router();
const db = require('../models');
const PostCtrl = require('../controllers/PostCtrl');
const auth = require('../middleware/auth');
const multer = require('../middleware/multer')

router.get('/',  PostCtrl.getAllPosts);
router.get('/allByUserId/:UserId', auth, PostCtrl.getAllPostsByUserId);
router.get('/:id', auth, PostCtrl.getOnePost);
router.post('/', auth, multer, PostCtrl.postPost);
router.post('/like/:PostId',  PostCtrl.likePost);
router.post('/dislike/:PostId',  PostCtrl.dislikePost);
router.put('/:id', auth, PostCtrl.putPost);
router.delete('/:id', multer, PostCtrl.deletePost);
router.delete('/truedelete/:id', multer, PostCtrl.trueDeletePost);

module.exports = router;