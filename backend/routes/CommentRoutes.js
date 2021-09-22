const express = require('express');
const router = express.Router();
const db = require('../models');

router.get('/', (req, res) => {
    db.Comment.findAll()
        .then( comments => res.send(comments))
        .catch( error => console.log(error));
});

router.get('/:id', (req, res) => {
    db.Comment.findAll({
        where: {
            id: req.params.id
        }
    }).then( comment => res.send(comment))
    .catch(error => console.log(error))
});

router.post('/', (req, res) => {
    db.Comment.create({
        text: req.body.text
    })
        .then(submittedComment => res.send(submittedComment))
        .catch(error => console.log(error))
});

router.put('/:id', (req, res) => {
    db.Comment.update(
        {
            text: req.body.text
        },
        {
            where: { id:req.params.id }
        }
    ).then(res.send('Comment successfully modified'))
    .catch(error => console.log(error))
});

router.delete('/:id', (req, res) => {
    db.Comment.destroy({
        where: {
            id: req.params.id
        }
    }).then(res.send('Comment successfully deleted'))
    .catch(error => console.log(error))
});

module.exports = router;