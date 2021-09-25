const express = require('express');
const router = express.Router();
const db = require('../models');

// A commenter pour le rendu
router.get('/', (req, res) => {
    db.User.findAll()
        .then( users => res.send(users))
        .catch( error => console.log(error))
});


router.get('/:id', (req, res) => {
    db.User.findAll({
        where: {
            id: req.params.id
        }
    }).then( user => res.send(user))
    .catch(error => console.log(error));
});

router.post('/', (req, res) => {
    db.User.create({
        username: req.body.username
    })
        .then(submittedUser => res.send(submittedUser))
        .catch(error => console.log(error));
});

router.put('/:id', (req, res) => {
    db.User.update(
        {
            username: req.body.username
        },
        {
            where: { id:req.params.id }
        }
    ).then(res.send('User successfully modified'))
    .catch(error => console.log(error));
});

router.delete('/:id', (req, res) => {
    db.User.destroy({
        where: {
            id: req.params.id
        }
    }).then(res.send('User successfully deleted'))
    .catch(error => console.log(error));
});

module.exports = router;