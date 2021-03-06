const express = require('express');
const router = express.Router();
const db = require('../models');
const LikeCtrl = require('../controllers/LikeCtrl');
const auth = require('../middleware/auth');

// A supprimer pour la production
router.get('/', LikeCtrl.getAllLikes);

router.get('/allByUserId/:UserId', auth, LikeCtrl.getAllLikesByUserId);
router.get('/allByPostId/:PostId', auth, LikeCtrl.getAllLikesByPostId);
router.get('/allByCommentId/:CommentId', auth, LikeCtrl.getAllLikesByCommentId);
router.post('/', auth, LikeCtrl.postLike);
router.delete('/:UserId/:PostId', auth, LikeCtrl.deleteLike);

module.exports = router;