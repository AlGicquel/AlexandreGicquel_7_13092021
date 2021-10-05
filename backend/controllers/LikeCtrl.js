const express = require('express');
const db = require('../models');

exports.getAllLikes = (req, res) => {
    db.Like.findAll()
        .then( likes => res.send(likes))
        // .catch( error => console.log(error));
        .catch(() => res.status(500).json({ message: 'Problème serveur : LikeCtrl.getAllLikes'}));
};

exports.getAllLikesByUserId = (req, res) => {
    db.Like.findAll({
        where: {
            UserId: req.params.UserId
        }
    }).then( likes => res.send(likes))
        .catch(() => res.status(500).json({ message: 'Problème serveur : LikeCtrl.getAllLikesByUserId'}));
        // .catch(error => console.log(error));
};

exports.getAllLikesByPostId = (req, res) => {
    db.Like.findAll({
        where: {
            PostId: req.params.PostId
        }
    }).then( likes => res.send(likes))
        // .catch(() => res.status(500).json({ message: 'Problème serveur : LikeCtrl.getAllLikesByLikeId'}));
        // .catch(error => console.log(error));
        .catch(error => res.status(500).json({ error }));
};

exports.getAllLikesByCommentId = (req, res) => {
    db.Like.findAll({
        where: {
            CommentId: req.params.CommentId
        }
    }).then( likes => res.send(likes))
        .catch(() => res.status(500).json({ message: 'Problème serveur : LikeCtrl.getAllLikesByCommentId'}));
        // .catch(error => console.log(error));
};



exports.postLike = (req, res) => {
    const likeToCreate = (req.body.PostId) ? {
        UserId: req.body.UserId,
        PostId: req.body.PostId
    } : {
        UserId: req.body.UserId,
        CommentId: req.body.CommentId
    }

    db.Like.create(likeToCreate)
        .then(submittedLike => res.send(submittedLike))
        // .catch(error => res.status(500).json({ error }));
        // .catch(error => console.log(error));
        .catch(() => res.status(500).json({ message: 'Problème serveur : LikeCtrl.postLike'}));

};



exports.deleteLike = (req, res) => {
    db.Like.destroy({
        where: {
            UserId: req.params.UserId,
            PostId: req.params.PostId
        }
    }).then(res.status(200).json({ message: 'La publication a bien été supprimée.'}))
    // .catch(error => console.log(error));
    .catch(() => res.status(500).json({ message: 'Problème serveur : LikeCtrl.deleteLike'}));

};

