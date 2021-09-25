const sequelize = require("sequelize");
const User = require("./User");

module.exports = (sequelize, DataTypes) => {
    const post = sequelize.define("Post", {
        text: {
            type: DataTypes.STRING,
            allowNull: false
        }

    });
    
    post.associate = models => {
        post.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return post;
}