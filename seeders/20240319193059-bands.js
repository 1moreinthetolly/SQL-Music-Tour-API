'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Bands', [
      { name: 'Flatbush Zombies', genre: 'rap', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Linkin Park', genre: 'rock', createdAt: new Date(), updatedAt: new Date() },
      { name: 'The Underachievers', genre: 'rap', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Pro Era', genre: 'rap', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Nirvana', genre: 'rock', createdAt: new Date(), updatedAt: new Date() }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Bands', null, {});
  }
};
