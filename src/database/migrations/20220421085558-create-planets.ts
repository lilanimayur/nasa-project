"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Planets", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
      },
      createdAt: {
        type: Sequelize.DATE,
      },
      updatedAt: {
        type: Sequelize.DATE,
      },
    });

    await queryInterface.createTable("Launches", {
      flightNumber: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      mission: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      rocket: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      launchDate: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      customer: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: "Nasa",
      },
      upcoming: {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
      },
      success: {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
      },
      planet_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "Planets",
          key: "id",
        },
      },
      createdAt: {
        type: Sequelize.DATE,
      },
      updatedAt: {
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropAllTables();
  },
};
