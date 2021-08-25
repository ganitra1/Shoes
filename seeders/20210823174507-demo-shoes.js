"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Shoes",
      [
        {
          name:'Favorite Runners',
          category:'Tennis Shoes',
          brand: "Brooks",
          color: 'White',
          color_2: 'Pink ',
          heelHeigth: '0',
          season: "All" , 
          userId:1,  
        },
        {
          name:'Favorite Boots',
        category:'Boots',
        brand: "Frye",
        color: 'Grey',
        color_2: "na" ,
        heelHeigth: "1",
        season:"Fall" ,
        userId:2, 
        },
        {
          name:'Beach Goer',
          category:'Sandals',
          brand: "Birkenstock",
          color: 'Black',
          color_2: "na" ,
          heelHeigth: "na",
          season:"Summer" ,
        userId:2, 
        },
        {
        name:'Chunky Heels',
        category:'Heels',
        brand: "Free People",
        color: 'Tan',
        color_2: "na" ,
        heelHeigth: "1.5",
        season:"Fall" ,
        userID:3,
        },
        {

          name:'Snow Boots',
          category:'boots',
          brand: "Sorel",
          color: 'Grey',
          color_2: "Black" ,
          heelHeigth: "1",
          season:"Winter" ,
          UserID:3,
        },


      ],
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Shoes', null, {});
     
  },
};