'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
      await queryInterface.bulkInsert('users', [
        {name: 'Crispim',email: 'crispim@email.com', password: '123456', role: 'user', created_at: new Date(), updated_at: new Date()},
        {name: 'Cristian',email: 'cristian@email.com', password: '123456', role: 'user', created_at: new Date(), updated_at: new Date()},
        {name: 'Pedro',email: 'pedro@email.com', password: '123456', role: 'user', created_at: new Date(), updated_at: new Date()},
        {name: 'Samuel',email: 'samuel@email.com', password: '123456', role: 'user', created_at: new Date(), updated_at: new Date()},
        {name: 'Otavio',email: 'otavio@email.com', password: '123456', role: 'user', created_at: new Date(), updated_at: new Date()},
        {name: 'Mastur',email: 'mastur@email.com', password: '123456', role: 'user', created_at: new Date(), updated_at: new Date()},
        {name: 'Edmar',email: 'edmar@email.com', password: '123456', role: 'user', created_at: new Date(), updated_at: new Date()},
        {name: 'Neto',email: 'neto@email.com', password: '123456', role: 'user', created_at: new Date(), updated_at: new Date()},
        {name: 'JoaoLucas',email: 'joaolucas@email.com', password: '123456', role: 'user', created_at: new Date(), updated_at: new Date()},
      ], 
        {});
    
  },

  async down (queryInterface, Sequelize) {

      await queryInterface.bulkDelete('users', null, {});
     
  }
};
