const express = require('express');
const router = express.Router();
const db = require('../models');
const PostCtrl = require('../controllers/PostCtrl');

router.get('/', PostCtrl.getAllPosts);
router.get('/allByUserId/:UserId', PostCtrl.getAllPostsByUserId)
router.get('/:id', PostCtrl.getOnePost);
router.post('/', PostCtrl.postPost);
router.put('/:id', PostCtrl.putPost);
router.delete('/:id', PostCtrl.deletePost);

module.exports = router;