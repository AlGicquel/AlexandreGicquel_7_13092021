const sequelize = require("sequelize");
const User = require("./User");
const Post = require('./Post');
const comment = require('./Comment');

module.exports = (sequelize, DataTypes) => {
    const like = sequelize.define("Like", {
        
    });
    
    like.associate = models => {
        like.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    like.associate = models => {
        like.belongsTo(models.Post, {
            foreignKey: {
                allowNull: true
            }
        });
    };

    like.associate = models => {
        like.belongsTo(models.Comment, {
            foreignKey: {
                allowNull: true
            }
        });
    };

    return like;
}