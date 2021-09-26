const express = require('express');
const router = express.Router();
const db = require('../models');
const UserCtrl = require('../controllers/UserCtrl')

// A commenter pour le rendu
router.get('/', UserCtrl.getAllUsers);


router.get('/:id', UserCtrl.getOneUser);
router.get('/usernameById/:id', UserCtrl.getUsernameById);
router.post('/signup', UserCtrl.signupUser);
router.post('/login', UserCtrl.loginUser);
router.put('/:id', UserCtrl.putUser);
router.delete('/:id', UserCtrl.deleteUser);

module.exports = router;