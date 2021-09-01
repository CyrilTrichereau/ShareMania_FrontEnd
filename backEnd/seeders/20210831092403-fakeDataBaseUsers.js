'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */


// foreach user in array
return queryInterface.bulkInsert('Users', [{
  alias: userToImport.alias,
  lastName: 'Doe',
  email: 'example@example.com',
  createdAt: new Date(),
  updatedAt: new Date()
}]);







  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};