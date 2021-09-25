const express = require('express');
const db = require('../models');

exports.getAllComments = (req, res) => {
    db.Comment.findAll()
        .then( comments => res.send(comments))
        .catch( error => console.log(error));
};

exports.getOneComment =(req, res) => {
    db.Comment.findAll({
        where: {
            id: req.params.id
        }
    }).then( comment => res.send(comment))
    .catch(error => console.log(error))
};

exports.postComment = (req, res) => {
    db.Comment.create({
        text: req.body.text
    })
        .then(submittedComment => res.send(submittedComment))
        .catch(error => console.log(error))
};

exports.putComment = (req, res) => {
    db.Comment.update(
        {
            text: req.body.text
        },
        {
            where: { id:req.params.id }
        }
    ).then(res.send('Comment successfully modified'))
    .catch(error => console.log(error))
};

exports.deleteComment = (req, res) => {
    db.Comment.destroy({
        where: {
            id: req.params.id
        }
    }).then(res.send('Comment successfully deleted'))
    .catch(error => console.log(error))
};