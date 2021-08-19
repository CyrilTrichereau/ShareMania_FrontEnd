'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Posts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userAlias: {
        allowNull: false,
        type: Sequelize.STRING
      },
      userUrlPicture: {
        allowNull: false,
        type: Sequelize.STRING
      },
      userService: {
        allowNull: false,
        type: Sequelize.STRING
      },
      userId: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      contentText: {
        allowNull: false,
        type: Sequelize.STRING
      },
      contentUrlPicture: {
        allowNull: false,
        type: Sequelize.STRING
      },
      originalUserAlias: {
        allowNull: false,
        type: Sequelize.STRING
      },
      originalUserUrlPicture: {
        allowNull: false,
        type: Sequelize.STRING
      },
      originalUserService: {
        allowNull: false,
        type: Sequelize.STRING
      },
      onFireId: {
        allowNull: false,
        type: Sequelize.STRING
      },
      coldId: {
        allowNull: false,
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Posts');
  }
};