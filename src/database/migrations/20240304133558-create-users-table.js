'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.createTable('users', {
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
    email: {
      type: Sequelize.DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    password: {
      type: Sequelize.DataTypes.STRING,
      allowNull: false
    },
    role: {
      type: Sequelize.DataTypes.STRING,
      allowNull: false
    },
    pic_url: {
      type: Sequelize.DataTypes.STRING
    }
    ,
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
    await queryInterface.dropTable('users');
     
  }
};
