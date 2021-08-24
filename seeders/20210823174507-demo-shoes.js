"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Shoes",
      [
        {
        name:'favorite runners',
        category:'tennis shoes',
        brand: "Brooks",
        color: 'white',
        color_2: 'pink ',
        heel_heigth: '0',
        season: "all" ,
        userId:1,  
        },
        {
          name:'favorite boots',
          category:'boots',
          brand: "Frye",
          color: 'grey',
          color_2: "na" ,
          heel_heigth: "1",
          season:"fall" ,
          userId:2, 
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};