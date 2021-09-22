const sequelize = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    const comment = sequelize.define("Comment", {
        text: {
            type: DataTypes.STRING,
            allowNull: false
        }

    });
    return comment;
}