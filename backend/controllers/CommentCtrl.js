const express = require('express');
const db = require('../models');

exports.getAllComments = (req, res) => {
    db.Comment.findAll()
        .then( comments => res.send(comments))
        // .catch( error => console.log(error));
        .catch(() => res.status(500).json({ message: 'Problème serveur : CommentCtrl.getAllComments'}));

};

exports.getAllCommentsByPostId = (req, res) => {
    db.Comment.findAll({
        where: {
            PostId: req.params.PostId,
            deleted: false
        }
    }).then( comment => res.send(comment))
    // .catch(error => console.log(error))
    .catch(() => res.status(500).json({ message: 'Problème serveur : CommentCtrl.getAllCommentsByPostId'}));

};

exports.getAllCommentsByUserId =(req, res) => {
    db.Comment.findAll({
        where: {
            UserId: req.params.UserId,
            deleted: false
        }
    }).then( comment => res.send(comment))
    // .catch(error => console.log(error))
    .catch(() => res.status(500).json({ message: 'Problème serveur : CommentCtrl.getAllCommentsByUserId'}));

};

exports.getOneComment =(req, res) => {
    db.Comment.findAll({
        where: {
            id: req.params.id
        }
    }).then( comment => res.send(comment))
    // .catch(error => console.log(error))
    .catch(() => res.status(500).json({ message: 'Problème serveur : CommentCtrl.getOneComment'}));

};

exports.postComment = (req, res) => {
    db.Comment.create({
        text: req.body.text,
        UserId: req.body.UserId,
        PostId: req.body.PostId
    })
        .then(submittedComment => res.status(200).json(submittedComment))
        // .catch(error => console.log(error))
        .catch(() => res.status(500).json({ message: 'Problème serveur : CommentCtrl.postComment'}));

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
    // .catch(error => console.log(error))
    .catch(() => res.status(500).json({ message: 'Problème serveur : CommentCtrl.putComment'}));

};

exports.truDeleteComment = (req, res) => {
    db.Comment.destroy({
        where: {
            id: req.params.id
        }
    }).then(res.send('Comment successfully deleted'))
    // .catch(error => console.log(error))
    .catch(() => res.status(500).json({ message: 'Problème serveur : CommentCtrl.truDeleteComment'}));

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
    // .catch(error => console.log(error))
    .catch(() => res.status(500).json({ message: 'Problème serveur : CommentCtrl.deleteComment'}));

};