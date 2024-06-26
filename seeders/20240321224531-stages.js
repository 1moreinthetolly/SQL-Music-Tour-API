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
    await queryInterface.bulkInsert('Stages', [
      { name: 'Red Rocks', location_id:1 },
      { name: 'SkyDome', location_id:2 },
      { name: 'ACC', location_id:3 },
      { name: 'Booth Amphitheater', location_id:4 },
      { name: 'Molson Amphitheater', location_id:5 }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Stages', null, {});
  }
};
