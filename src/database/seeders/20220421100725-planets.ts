"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Planets", [
      {
        name: "Kepler-1652 b",
      },
      {
        name: "Kepler-1410 b",
      },
      {
        name: "Kepler-296 A f",
      },
      {
        name: "Kepler-442 b",
      },
      {
        name: "Kepler-296 A e",
      },
      {
        name: "Kepler-1649 b",
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Planets", null, {});
  },
};
