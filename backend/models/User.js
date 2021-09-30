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
        },
        level: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
            allowNull: false,
        },
        deleted: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
            
        }

    });


    user.associate = models => {
        user.hasMany(models.Comment, {
            // onDelete: 'cascade'
        });
    };
    return user;
}