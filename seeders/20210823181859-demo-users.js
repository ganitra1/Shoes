"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          name:'Anitra',
        username:"A",
        password: '123',
        },
        {
          name:'Betty',
        username:"B",
        password: `456`,
    },
    {
        name:'Sue',
        username:"S",
        password: '789',
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    
      await queryInterface.bulkDelete('Users', null, {});
     
  },
};

