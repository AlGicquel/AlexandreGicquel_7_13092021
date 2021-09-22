const express = require('express');
const router = express.Router();
const db = require('../models');

router.get('/posts/', (req, res) => {
    db.Post.findAll()
        .then( posts => res.send(posts))
        .catch( error => console.log(error));
});

router.get('/posts/:id', (req, res) => {
    db.Post.findAll({
        where: {
            id: req.params.id
        }
    }).then( post => res.send(post))
    .catch(error => console.log(error))
});

router.post('/posts/', (req, res) => {
    db.Post.create({
        text: req.body.text
    })
        .then(submittedPost => res.send(submittedPost))
        .catch(error => console.log(error))
});

router.put('/posts/:id', (req, res) => {
    db.Post.update(
        {
            text: req.body.text
        },
        {
            where: { id:req.params.id }
        }
    ).then(res.send('Post successfully modified'))
    .catch(error => console.log(error))
});

router.delete('/posts/:id', (req, res) => {
    db.Post.destroy({
        where: {
            id: req.params.id
        }
    }).then(res.send('Post successfully deleted'))
    .catch(error => console.log(error))
});

module.exports = router;