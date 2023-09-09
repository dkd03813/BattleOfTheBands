'use strict';

const path = require('path');

// Define the base directory for your project
const baseDirectory = path.join(__dirname, '..', '..', '..', 'client', 'src', 'assets', 'images');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('BandMembers', [
      {
        name: "Jon Bohnam",
        type: "Drummer",
        image: path.join(baseDirectory, 'JonBohnam.png'),
        archetype: "Wild Rhythms",
        archetypeDes: "Known for their unconventional beats and experimental fills during live performances (gigs), this drummer adds an element of surprise and excitement to the band's music, potentially attracting a dedicated fanbase. Their creative personality may lead to dynamic band practices, but their unpredictability can occasionally disrupt the band's flow, affecting teamwork in practice. They excel at generating income and popularity at media events but might struggle on stage during live performances (gigs).",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Teddy Mercury",
        type: "Singer",
        image: path.join(baseDirectory, 'TeddyMercury.png'),
        archetype: "Powerhouse Vocalist",
        archetypeDes: "With a commanding voice during live performances (gigs), this singer excels in delivering powerful performances that draw large crowds, potentially leading to high popularity and income. Their charismatic stage presence shines in interviews and public appearances. However, their demanding vocal style may impact vocal health and lead to burnout. They significantly impact income and popularity at live performances (gigs) but may struggle in practice and media events due to vocal strain",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Timmy Hendricks",
        type: "Guitar",
        image: path.join(baseDirectory, 'TimmyHendricks.png'),
        archetype: "Innovative Soundscaper",
        archetypeDes: "Known for experimenting with unique effects and textures, this guitarist adds an otherworldly dimension to the band's music during live performances (gigs). They are creative and open-minded during practice, often suggesting innovative ideas. However, their unconventional and eccentric personality may not always resonate with the media or fans, causing mixed reactions during media events.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Peter McCarty",
        type: "Bass",
        image: path.join(baseDirectory, 'PeterMcCarty.png'),
        archetype: "Smooth and Subtle",
        archetypeDes: "Known for their understated elegance, this bassist provides a subtle yet essential foundation for the band's sound during live performances (gigs), enhancing the overall performance. Their calming and diplomatic personality helps maintain band harmony during practice. However, their reserved demeanor may not always stand out in media events, where they may struggle to command attention.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // Add more band members as needed
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('BandMembers', null, {});
  }
};



