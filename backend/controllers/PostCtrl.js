const express = require('express');
const db = require('../models');

exports.getAllPosts = (req, res) => {
    db.Post.findAll({ 
            limit: 10, 
            order: [['updatedAt', 'DESC']]
        })
        .then( posts => res.send(posts))
        .catch( error => console.log(error));
};

exports.getAllPostsByUserId = (req, res) => {
    db.Post.findAll({
        where: {
            UserId: req.params.UserId
        }
    }).then( post => res.send(post))
    .catch(error => console.log(error));
};

exports.getOnePost = (req, res) => {
    db.Post.findAll({
        where: {
            id: req.params.id
        }
    }).then( post => res.send(post))
    .catch(error => console.log(error));
};

exports.postPost = (req, res) => {
    db.Post.create({
        text: req.body.text,
        UserId: req.body.UserId
    })
        .then(submittedPost => res.send(submittedPost))
        .catch(error => res.status(500).json({ error: "postpost" }));
        // .catch(error => console.log(error));
};

exports.putPost = (req, res) => {
    db.Post.update(
        {
            text: req.body.text
        },
        {
            where: { id:req.params.id }
        }
    ).then(res.send('Post successfully modified'))
    .catch(error => console.log(error));
};

exports.deletePost = (req, res) => {
    db.Post.destroy({
        where: {
            id: req.params.id
        }
    }).then(res.status(200).json({ message: 'La publication a bien été supprimée.'}))
    .catch(error => console.log(error));
};