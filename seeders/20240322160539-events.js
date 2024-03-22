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
    await queryInterface.bulkInsert('Events', [
      { name: 'Rock The Bells', start_time: new Date('2024-03-10 18:00:00'), end_time: new Date('2024-03-20 18:00:00') },
      { name: 'Rolling Loud', start_time: new Date('2024-04-10 18:00:00'), end_time: new Date('2024-04-20 18:00:00') }
     ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Events', null, {});
  }
};
