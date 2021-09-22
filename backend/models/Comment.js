const sequelize = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    const user = sequelize.define("User", {
        text: {
            type: DataTypes.STRING,
            allowNull: false
        }

    });
    return user;
}