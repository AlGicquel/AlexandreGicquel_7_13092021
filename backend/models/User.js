const sequelize = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    const user = sequelize.define("User", {
        username: {
            type: DataTypes.STRING,
            allowNull: false
        }

    });
    return user;
}