"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Comment.belongsTo(models.Post, {
        foreignKey: {
          allowNull: false
        }
      })
    }
  }
  Comment.init(
    {
      postUserId: DataTypes.INTEGER,
      postId: DataTypes.INTEGER,
      postTime: DataTypes.DATE,
      userId: DataTypes.INTEGER,
      userAlias: DataTypes.STRING,
      userUrlPicture: DataTypes.STRING,
      commentText: DataTypes.TEXT,
      onFireId: DataTypes.STRING,
      coldId: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Comment",
    }
  );
  return Comment;
};
