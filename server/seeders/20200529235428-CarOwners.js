'use strict';
const CarOwners = require('./../car_owner');


const CarOwnersInfo = CarOwners.map(car => {
    return { ...car, createdAt: new Date(), updatedAt: new Date() };
})

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert("CarOwners", CarOwnersInfo, {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('CarOwners', null, {});                                     }
};
