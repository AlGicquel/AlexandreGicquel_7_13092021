const sequelize = require("sequelize");
const User = require("./User");

module.exports = (sequelize, DataTypes) => {
    const post = sequelize.define("Post", {
        text: {
            type: DataTypes.STRING,
            allowNull: false
        },
        imageUrl: {
            type: DataTypes.STRING,
            allowNull: true
        },
        deleted: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        likes: {
            type: DataTypes.STRING,
            defaultValue: ''
        }
    });
    
    post.associate = models => {
        post.belongsTo(models.User, {
            foreignKey: {
                // allowNull: false
            }
        });
    };


    return post;
}