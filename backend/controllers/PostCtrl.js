const express = require('express');
const db = require('../models');

exports.getAllPosts = (req, res) => {
    db.Post.findAll({ 
            limit: 10, 
            order: [['updatedAt', 'DESC']],
            where: {
                deleted: false
            }
        })
        .then( posts => {
            for (let post of posts) {
                let likesArr = post.likes.split(' ');
                let likesArrInt = [];
                for (let like of likesArr) {
                    likesArrInt.push(parseInt(like));
                }
                likesArrInt.splice(0,1)
                delete post.likes;
                
                post['likes'] = likesArrInt;
                
            }
            res.send(posts)
        })
        .catch( error => console.log(error));
        // .catch(() => res.status(500).json({ message: 'Problème serveur : PostCtrl.getAllPosts'}));
};

exports.getAllPostsByUserId = (req, res) => {
    db.Post.findAll({
        where: {
            UserId: req.params.UserId,
            deleted: false
        }
    }).then( post => res.send(post))
        .catch(() => res.status(500).json({ message: 'Problème serveur : PostCtrl.getAllPostsByUserId'}));
        // .catch(error => console.log(error));
};

exports.getOnePost = (req, res) => {
    db.Post.findAll({
        where: {
            id: req.params.id
        }
    }).then( post => res.send(post))
    // .catch(error => console.log(error));
    .catch(() => res.status(500).json({ message: 'Problème serveur : PostCtrl.getOnePost'}));

};

exports.postPost = (req, res) => {
    const postToCreate = (req.file) ? {
        text: req.body.text,
        UserId: req.body.UserId,
        imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
    } : {
        text: req.body.text,
        UserId: req.body.UserId,
    }

    db.Post.create(postToCreate)
        .then(submittedPost => res.send(submittedPost))
        // .catch(error => res.status(500).json({ error }));
        // .catch(error => console.log(error));
        .catch((error) => res.status(500).json({ message: 'Problème serveur : PostCtrl.postPost'}));

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
    // .catch(error => console.log(error));
    .catch(() => res.status(500).json({ message: 'Problème serveur : PostCtrl.putPost'}));

};

exports.trueDeletePost = (req, res) => {
    db.Post.destroy({
        where: {
            id: req.params.id
        }
    }).then(res.status(200).json({ message: 'La publication a bien été supprimée.'}))
    // .catch(error => console.log(error));
    .catch(() => res.status(500).json({ message: 'Problème serveur : PostCtrl.trueDeletePost'}));

};

exports.deletePost = (req, res) => {
    db.Post.update(
        {
            deleted: true
        },
        {
            where: { id:req.params.id }
        }
    ).then(res.status(200).json({ message: 'La publication a bien été supprimée.'}))
    // .catch(error => console.log(error));
    .catch(() => res.status(500).json({ message: 'Problème serveur : PostCtrl.deletePost'}));

};

exports.likePost = (req, res) => {
    db.Post.findAll({
        where: {
            id: req.params.PostId
        }
    }).then( post => {
        let likeArr = post[0].likes.split(' ');
        likeArr.push(req.body.UserId)
        const likeArrStr = likeArr.join(' ');
        return likeArrStr;
    }).then( arr => {
        db.Post.update(
            {
                likes: arr
            },
            {
                where: { id:req.params.PostId }
            }
        ).then(res.send('Post successfully liked'))
        // .catch(error => console.log(error));
        .catch(() => res.status(500).json({ message: 'Problème serveur : PostCtrl.likePost'}));
    })
    // .catch(error => console.log(error));
    .catch(() => res.status(500).json({ message: 'Problème serveur : PostCtrl.likePost'}));
}

exports.dislikePost = (req, res) => {
    db.Post.findAll({
        where: {
            id: req.params.PostId
        }
    }).then( post => {
        let likeArr = post[0].likes.split(' ');
        for (let i=0; i<likeArr.length; i++) {
            if (likeArr[i] == req.body.UserId) {
                likeArr.splice(i,1);
            }
        }
        const likeArrStr = likeArr.join(' ');
        return likeArrStr;
    }).then( arr => {
        db.Post.update(
            {
                likes: arr
            },
            {
                where: { id:req.params.PostId }
            }
        ).then(res.send('Post successfully liked'))
        // .catch(error => console.log(error));
        .catch(() => res.status(500).json({ message: 'Problème serveur : PostCtrl.likePost'}));
    })
    // .catch(error => console.log(error));
    .catch(() => res.status(500).json({ message: 'Problème serveur : PostCtrl.likePost'}));
}