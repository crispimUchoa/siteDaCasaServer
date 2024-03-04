'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('tasks', [
      {name: 'lixo', user_id: 4, created_at: new Date(), updated_at: new Date()},
      {name: 'agua', user_id: 4, created_at: new Date(), updated_at: new Date()}
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('tasks', null, {});

  }
};
