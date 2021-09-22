const sequelize = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    const post = sequelize.define("Post", {
        text: {
            type: DataTypes.STRING,
            allowNull: false
        }

    });
    return post;
}