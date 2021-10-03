const express = require('express');
const db = require('../models');

exports.getAllComments = (req, res) => {
    db.Comment.findAll()
        .then( comments => res.send(comments))
        .catch( error => console.log(error));
};

exports.getAllCommentsByPostId = (req, res) => {
    db.Comment.findAll({
        where: {
            PostId: req.params.PostId,
            deleted: false
        }
    }).then( comment => res.send(comment))
    .catch(error => console.log(error))
};

exports.getAllCommentsByUserId =(req, res) => {
    db.Comment.findAll({
        where: {
            UserId: req.params.UserId,
            deleted: false
        }
    }).then( comment => res.send(comment))
    .catch(error => console.log(error))
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
        text: req.body.text,
        UserId: req.body.UserId,
        PostId: req.body.PostId
    })
        .then(submittedComment => res.status(200).json(submittedComment))
        .catch(error => console.log(error))
};

exports.putComment = (req, res) => {
    db.Comment.update(
        {
            text: req.body.text,
        },
        {
            where: { id:req.params.id }
        }
    ).then(res.send('Comment successfully modified'))
    .catch(error => console.log(error))
};

exports.truDeleteComment = (req, res) => {
    db.Comment.destroy({
        where: {
            id: req.params.id
        }
    }).then(res.send('Comment successfully deleted'))
    .catch(error => console.log(error))
};

exports.deleteComment = (req, res) => {
    db.Comment.update(
        {
            deleted: true
        },
        {
            where: { id:req.params.id }
        }
    ).then(res.send('Comment successfully deleted'))
    .catch(error => console.log(error))
};