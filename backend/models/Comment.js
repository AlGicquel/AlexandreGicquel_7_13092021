const sequelize = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    const comment = sequelize.define("Comment", {
        text: {
            type: DataTypes.STRING,
            allowNull: false
        },
        deleted: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        }
    });

    comment.associate = models => {
        comment.belongsTo(models.Post, {
            foreignKey: {
                allowNull: false
            }
        });
    };
    return comment;
}