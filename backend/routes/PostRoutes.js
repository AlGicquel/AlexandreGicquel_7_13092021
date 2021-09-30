const express = require('express');
const router = express.Router();
const db = require('../models');
const PostCtrl = require('../controllers/PostCtrl');
const auth = require('../middleware/auth')

router.get('/',  PostCtrl.getAllPosts);
router.get('/allByUserId/:UserId', auth, PostCtrl.getAllPostsByUserId);
router.get('/:id', auth, PostCtrl.getOnePost);
router.post('/', auth, PostCtrl.postPost);
router.put('/:id', auth, PostCtrl.putPost);
router.delete('/:id', PostCtrl.deletePost);

module.exports = router;