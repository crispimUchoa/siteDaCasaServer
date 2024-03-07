'use strict';
const bcrypt = require('bcrypt')


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
const hashedPassword = await bcrypt.hash('12345678', 10)
    
      await queryInterface.bulkInsert('users', [
        {name: 'JoaoLucas',email: 'joaolucas@email.com', password: hashedPassword, role: 'user', created_at: new Date(), updated_at: new Date()},
        {name: 'Cristian',email: 'cristian@email.com', password: hashedPassword, role: 'user', created_at: new Date(), updated_at: new Date()},
        {name: 'Otavio',email: 'otavio@email.com', password: hashedPassword, role: 'user', created_at: new Date(), updated_at: new Date()},
        {name: 'Samuel',email: 'samuel@email.com', password: hashedPassword, role: 'user', created_at: new Date(), updated_at: new Date()},
        {name: 'Mastur',email: 'mastur@email.com', password: hashedPassword, role: 'user', created_at: new Date(), updated_at: new Date()},
        {name: 'Pedro',email: 'pedro@email.com', password: hashedPassword, role: 'user', created_at: new Date(), updated_at: new Date()},
        {name: 'Neto',email: 'neto@email.com', password: hashedPassword, role: 'user', created_at: new Date(), updated_at: new Date()},
        {name: 'Crispim',email: 'crispim@email.com', password: hashedPassword, role: 'user', created_at: new Date(), updated_at: new Date()},
        {name: 'Edmar',email: 'edmar@email.com', password: hashedPassword, role: 'user', created_at: new Date(), updated_at: new Date()},
      ], 
        {});
    
  },

  async down (queryInterface, Sequelize) {

      await queryInterface.bulkDelete('users', null, {});
     
  }
};
