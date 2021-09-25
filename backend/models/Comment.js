const sequelize = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    const comment = sequelize.define("Comment", {
        text: {
            type: DataTypes.STRING,
            allowNull: false
        },
    });

    comment.associate = models => {
        comment.belongsTo(models.Post, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    // comment.associate = models => {
    //     comment.belongsTo(models.User, {
    //         onDelete: 'cascade'
    //     });
    // };
    return comment;
}