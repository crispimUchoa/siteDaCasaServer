'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
     await queryInterface.bulkInsert('lists', [
      {task_id: 11, user_id: 29, created_at: new Date(), updated_at: new Date()},
      {task_id: 11, user_id: 30, created_at: new Date(), updated_at: new Date()},
      {task_id: 11, user_id: 31, created_at: new Date(), updated_at: new Date()},
      {task_id: 11, user_id: 32, created_at: new Date(), updated_at: new Date()},
      {task_id: 11, user_id: 33, created_at: new Date(), updated_at: new Date()},
      {task_id: 11, user_id: 34, created_at: new Date(), updated_at: new Date()},
      {task_id: 11, user_id: 35, created_at: new Date(), updated_at: new Date()},
      {task_id: 11, user_id: 36, created_at: new Date(), updated_at: new Date()},
      {task_id: 11, user_id: 37, created_at: new Date(), updated_at: new Date()},

      {task_id: 12, user_id: 29, created_at: new Date(), updated_at: new Date()},
      {task_id: 12, user_id: 30, created_at: new Date(), updated_at: new Date()},
      {task_id: 12, user_id: 31, created_at: new Date(), updated_at: new Date()},
      {task_id: 12, user_id: 32, created_at: new Date(), updated_at: new Date()},
      {task_id: 12, user_id: 33, created_at: new Date(), updated_at: new Date()},
      {task_id: 12, user_id: 34, created_at: new Date(), updated_at: new Date()},
      {task_id: 12, user_id: 35, created_at: new Date(), updated_at: new Date()},
      {task_id: 12, user_id: 36, created_at: new Date(), updated_at: new Date()},
      {task_id: 12, user_id: 37, created_at: new Date(), updated_at: new Date()},
      
    ], {});
    
  },

  async down (queryInterface, Sequelize) {
  
     await queryInterface.bulkDelete('lists', null, {});
     
  }
};
