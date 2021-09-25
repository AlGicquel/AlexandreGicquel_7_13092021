const express = require('express');
const router = express.Router();
const db = require('../models');

router.get('/', (req, res) => {
    db.Post.findAll()
        .then( posts => res.send(posts))
        .catch( error => console.log(error));
});

router.get('/:id', (req, res) => {
    db.Post.findAll({
        where: {
            id: req.params.id
        }
    }).then( post => res.send(post))
    .catch(error => console.log(error));
});

router.post('/', (req, res) => {
    db.Post.create({
        text: req.body.text,
        UserId: req.body.UserId
    })
        .then(submittedPost => res.send(submittedPost))
        .catch(error => console.log(error));
});

router.put('/:id', (req, res) => {
    db.Post.update(
        {
            text: req.body.text
        },
        {
            where: { id:req.params.id }
        }
    ).then(res.send('Post successfully modified'))
    .catch(error => console.log(error));
});

router.delete('/:id', (req, res) => {
    db.Post.destroy({
        where: {
            id: req.params.id
        }
    }).then(res.send('Post successfully deleted'))
    .catch(error => console.log(error));
});

module.exports = router;