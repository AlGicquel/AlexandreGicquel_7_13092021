const sequelize = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    const user = sequelize.define("User", {
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
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