'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('tasks', [
      {name: 'jogar o lixo',user_id:37,created_at: new Date(), updated_at: new Date()},
      {name: 'comprar agua',user_id:35 ,created_at: new Date(), updated_at: new Date()}
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('tasks', null, {});

  }
};
