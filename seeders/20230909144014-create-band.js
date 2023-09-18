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
      {
        name: "Whitney Austin",
        type: "Singer",
        image: path.join(baseDirectory, 'WhitneyAustin.png'),
        archetype: "Soulful Crooner",
        archetypeDes: "Known for their soulful and emotional singing, this singer adds depth and passion to the band's music during live performances (gigs). Their ability to connect with the audience on a personal level leads to dedicated fans. However, their sensitivity can sometimes lead to emotional challenges, affecting their performance. They excel at creating intimate moments at media events but may require support in high-pressure situations.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Timmy Sage",
        type: "Guitar",
        image: path.join(baseDirectory, 'TimmySage.png'),
        archetype: "Jazz Virtuoso",
        archetypeDes: "A true virtuoso of jazz and improvisation, this guitarist infuses the band's music with complex melodies and improvisational skills during live performances (gigs). They thrive in experimental and avant-garde settings. However, their penchant for complexity may challenge the band's ability to connect with a broader audience. They excel at impressing music aficionados at media events but may require guidance in making their music more accessible.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Stevie Hicks",
        type: "Bass",
        image: path.join(baseDirectory, 'StevieHicks.png'),
        archetype: "Smooth and Subtle",
        archetypeDes: "Known for their understated elegance, this bassist provides a subtle yet essential foundation for the band's sound during live performances (gigs), enhancing the overall performance. Their calming and diplomatic personality helps maintain band harmony during practice. However, their reserved demeanor may not always stand out in media events, where they may struggle to command attention.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Carol Queen",
        type: "Singer",
        image: path.join(baseDirectory, 'CarolQueen.png'),
        archetype: "Acoustic Storyteller",
        archetypeDes: "This singer specializes in acoustic and folk-inspired music, using their lyrics to tell compelling stories during live performances (gigs). Their ability to create emotional connections with fans through storytelling is unmatched. However, their introverted nature may make them shy in interviews and media events. They excel at creating intimate and heartfelt moments at media events but may need encouragement to share their stories.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Kurt NoBrain",
        type: "Drummer",
        image: path.join(baseDirectory, 'KurtNoBrain.png'),
        archetype: "Percussion Prodigy",
        archetypeDes: "Masters of rhythm and groove, this drummer keeps the band's beats tight and groovy during live performances (gigs). Their impeccable timing and versatility make them essential to the band's success. However, their relentless pursuit of perfection can sometimes lead to tension within the group. They shine during intense practice sessions but may struggle with spontaneity in media events.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Janis Hoplin",
        type: "Singer",
        image: path.join(baseDirectory, 'JanisHoplin.png'),
        archetype: "Indie Songwriter",
        archetypeDes: "A skilled songwriter and lyricist, this singer brings a unique indie flavor to the band's music during live performances (gigs). Their ability to craft meaningful lyrics and melodies sets them apart. However, their introverted nature may make them shy in interviews and media events. They excel at creating emotional connections with fans but may need encouragement to step into the spotlight.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Pelvis Bresley",
        type: "Drummer",
        image: path.join(baseDirectory, 'PelvisBresley.png'),
        archetype: "Dynamic Showman",
        archetypeDes: "A true showman on the drums, this drummer knows how to captivate audiences with their energetic and theatrical performances during live shows (gigs). They're known for their dramatic drum solos and stage presence. However, their desire for the spotlight can sometimes create tension within the band. They excel at thrilling fans at media events but may need to find balance within the group.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Joan Lett",
        type: "Guitar",
        image: path.join(baseDirectory, 'JoanLett.png'),
        archetype: "Pop Sensation",
        archetypeDes: "This guitarist specializes in catchy pop tunes that resonate with a broad audience during live performances (gigs). Their ability to create radio-friendly hits can lead to commercial success. However, their inclination for mainstream music may occasionally clash with the band's artistic goals. They excel at attracting mainstream fans at media events but may need to balance commercial appeal with artistic integrity.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Brian Baye",
        type: "Bass",
        image: path.join(baseDirectory, 'BrianBaye.png'),
        archetype: "Smooth and Subtle",
        archetypeDes: "Known for their understated elegance, this bassist provides a subtle yet essential foundation for the band's sound during live performances (gigs), enhancing the overall performance. Their calming and diplomatic personality helps maintain band harmony during practice. However, their reserved demeanor may not always stand out in media events, where they may struggle to command attention.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "George Carrison",
        type: "Drummer",
        image: path.join(baseDirectory, 'GeorgeCarrison.png'),
        archetype: "Rhythmic Explorer",
        archetypeDes: "Constantly exploring new beats and rhythms, this drummer brings an element of curiosity and experimentation to the band's music during live performances (gigs). Their willingness to try unconventional approaches can lead to exciting musical discoveries. However, their inclination for complexity may occasionally challenge the band's ability to connect with a broader audience. They shine during jam sessions but may need guidance in refining ideas for media events.",
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



