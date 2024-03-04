'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.createTable('tasks', {
    id: {
      type: Sequelize.DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true 
    },
    name: {
      type: Sequelize.DataTypes.STRING,
      allowNull: false
    },
    user_id: {
      type: Sequelize.DataTypes.INTEGER
    },
    created_at: {
      allowNull: false,
      type: Sequelize.DataTypes.DATE
    },
    updated_at: {
      allowNull: false,
      type: Sequelize.DataTypes.DATE
    }
   })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('tasks')
  }
};
