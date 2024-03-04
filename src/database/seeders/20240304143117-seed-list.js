'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
     await queryInterface.bulkInsert('lists', [
      {task_id: 2, user_id: 4, created_at: new Date(), updated_at: new Date()},
      {task_id: 2, user_id: 5, created_at: new Date(), updated_at: new Date()},
      {task_id: 2, user_id: 6, created_at: new Date(), updated_at: new Date()},
      {task_id: 2, user_id: 7, created_at: new Date(), updated_at: new Date()},
      {task_id: 2, user_id: 8, created_at: new Date(), updated_at: new Date()},
      {task_id: 2, user_id: 9, created_at: new Date(), updated_at: new Date()},
      {task_id: 2, user_id: 10, created_at: new Date(), updated_at: new Date()},
      {task_id: 2, user_id: 11, created_at: new Date(), updated_at: new Date()},
      {task_id: 2, user_id: 12, created_at: new Date(), updated_at: new Date()},
      
    ], {});
    
  },

  async down (queryInterface, Sequelize) {
  
     await queryInterface.bulkDelete('lists', null, {});
     
  }
};
