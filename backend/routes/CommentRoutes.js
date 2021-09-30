const express = require('express');
const router = express.Router();
const db = require('../models');
const CommentCtrl = require('../controllers/CommentCtrl')
const auth = require('../middleware/auth')

router.get('/', auth, CommentCtrl.getAllComments);
router.get('/allByUserId/:UserId', auth, CommentCtrl.getAllCommentsByUserId);
router.get('/allByPostId/:PostId', auth, CommentCtrl.getAllCommentsByPostId);
router.get('/:id', auth, CommentCtrl.getOneComment);
router.post('/', auth, CommentCtrl.postComment);
router.put('/:id', auth, CommentCtrl.putComment);
router.delete('/:id', auth, CommentCtrl.deleteComment);

module.exports = router;