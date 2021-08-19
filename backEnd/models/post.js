"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Post.hasMany(models.Comment);
    }
  }
  Post.init(
    {
      userAlias: DataTypes.STRING,
      userUrlPicture: DataTypes.STRING,
      userService: DataTypes.STRING,
      userId: DataTypes.INTEGER,
      contentText: DataTypes.STRING,
      contentUrlPicture: DataTypes.STRING,
      originalUserAlias: DataTypes.STRING,
      originalUserUrlPicture: DataTypes.STRING,
      originalUserService: DataTypes.STRING,
      onFireId: DataTypes.STRING,
      coldId: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Post",
    }
  );
  return Post;
};
