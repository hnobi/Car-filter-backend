'use strict';
module.exports = (sequelize, DataTypes) => {
  const CarOwners = sequelize.define(
    "CarOwners",
    {
      first_name: DataTypes.STRING,
      last_name: DataTypes.STRING,
      email: DataTypes.STRING,
      country: DataTypes.STRING,
      car_model: DataTypes.STRING,
      car_model_year: DataTypes.INTEGER,
      car_color: DataTypes.STRING,
      gender: DataTypes.STRING,
      job_title: DataTypes.STRING,
      bio: DataTypes.STRING,
    },
    {}
  );
  CarOwners.associate = function(models) {
    // associations can be defined here
  };
  return CarOwners;
};