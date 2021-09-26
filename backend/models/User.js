const sequelize = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    const user = sequelize.define("User", {
        firstName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        }

    });

    // user.associate = models => {
    //     user.hasMany(models.Post, {
    //         onDelete: 'cascade'
    //     });
    // };

    user.associate = models => {
        user.hasMany(models.Comment, {
            // onDelete: 'cascade'
        });
    };
    return user;
}