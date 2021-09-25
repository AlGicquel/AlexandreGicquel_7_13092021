const express = require('express');
const router = express.Router();
const db = require('../models');
const CommentCtrl = require('../controllers/CommentCtrl')

router.get('/', CommentCtrl.getAllComments);
router.get('/:id', CommentCtrl.getOneComment);
router.post('/', CommentCtrl.postComment);
router.put('/:id', CommentCtrl.putComment);
router.delete('/:id', CommentCtrl.deleteComment);

module.exports = router;