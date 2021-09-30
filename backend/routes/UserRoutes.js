const express = require('express');
const router = express.Router();
const db = require('../models');
const UserCtrl = require('../controllers/UserCtrl')
const auth = require('../middleware/auth')

// A commenter pour le rendu
router.get('/',  UserCtrl.getAllUsers);


router.get('/:id', auth, UserCtrl.getOneUser);
router.get('/usernameById/:id', auth, UserCtrl.getUsernameById);
router.post('/signup', UserCtrl.signupUser);
router.post('/login', UserCtrl.loginUser);
router.put('/:id', auth, UserCtrl.putUser);
router.delete('/:id', auth, UserCtrl.deleteUser);

module.exports = router;