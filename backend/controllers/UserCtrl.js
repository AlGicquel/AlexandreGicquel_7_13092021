const express = require('express');
const db = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.getAllUsers =(req, res) => {
    db.User.findAll()
        .then( users => res.send(users))
        .catch( error => console.log(error))
};

exports.getUsernameById = (req, res) => {
    db.User.findAll({
        attributes: [
            'firstName', 
            'lastName'
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

exports.signupUser = (req, res) => {
    bcrypt.hash(req.body.password, 10)
    .then(hash => {
        db.User.create({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: hash
        })
        .then(() => res.status(201).json({ message: 'Utilisateur créé !' }))
        .catch(error => console.log(error));
    })
};

exports.loginUser = (req, res) => {
    db.User.findAll({
        attributes: [
            'password',
            'id'
        ],
        where: {
            email: req.body.email
        }
    }).then( user => {
        if (!user) {
            return res.status(401).json({ error: 'Utilisateur non trouvé !' });
        }
        bcrypt.compare(req.body.password, user[0].password)
            .then(valid => {
                if (!valid) { 
                    return res.status(401).json({ error: 'Mot de passe incorrect !' });
                }
                res.status(200).json({
                    userId: user[0].id,
                    token: jwt.sign(
                        { userId: user._id },
                        'RANDOM_TOKEN_SECRET',
                        { expiresIn: '24h' }
                    )
                });
            })
            .catch(error => console.log(error));
            // .catch(error => res.status(500).json({ error }));
    })
    .catch(error => console.log(error));
}

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
