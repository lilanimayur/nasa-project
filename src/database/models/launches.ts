"use strict";
module.exports = (sequelize, DataTypes) => {
  const Launches = sequelize.define(
    "Launches",
    {
      flightNumber: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      mission: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      rocket: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      launchDate: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      customer: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "Nasa",
      },
      upcoming: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
      success: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
      planet_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "Planets",
          key: "id",
        },
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    },
    {}
  );
  Launches.associate = function (models) {
    Launches.belongsTo(models.Planets, {
      foreignKey: "planet_id",
      as: "planet",
      onDelete: "CASCADE",
    });
  };
  return Launches;
};
