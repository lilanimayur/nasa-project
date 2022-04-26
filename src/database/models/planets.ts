"use strict";
module.exports = (sequelize, DataTypes) => {
  const Planets = sequelize.define(
    "Planets",
    {
      id: {
        type: DataTypes.STRING,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {}
  );
  Planets.associate = function (models) {
    Planets.hasMany(models.Launches, {
      foreignKey: "planet_id",
      as: "launches",
      onDelete: "CASCADE",
    });
  };
  return Planets;
};
