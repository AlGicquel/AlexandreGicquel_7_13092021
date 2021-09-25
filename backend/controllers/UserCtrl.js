const express = require('express');
const db = require('../models');

exports.getAllUsers =(req, res) => {
    db.User.findAll()
        .then( users => res.send(users))
        .catch( error => console.log(error))
};

exports.getUsernameById = (req, res) => {
    db.User.findAll({
        attributes: [
            'username'
        ],
        where: {
            id: req.params.id
        }
    }).then( user => res.send(user))
    .catch(error => console.log(error));
};

exports.getOneUser = (req, res) => {
    db.User.findAll({
        where: {
            id: req.params.id
        }
    }).then( user => res.send(user))
    .catch(error => console.log(error));
};

exports.postUser = (req, res) => {
    db.User.create({
        username: req.body.username,
        password: req.body.password
    })
        .then(submittedUser => res.send(submittedUser))
        .catch(error => console.log(error));
};

exports.putUser = (req, res) => {
    db.User.update(
        {
            username: req.body.username,
            password: req.body.password
        },
        {
            where: { id:req.params.id }
        }
    ).then(res.send('User successfully modified'))
    .catch(error => console.log(error));
};

exports.deleteUser = (req, res) => {
    db.User.destroy({
        where: {
            id: req.params.id
        }
    }).then(res.send('User successfully deleted'))
    .catch(error => console.log(error));
};
