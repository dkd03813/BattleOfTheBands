'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Events", [
      {
        eventType: "Podcast",
        eventTitle: "Explicit Slip-Up",
        eventDetails: "During a podcast recording, your guitarist accidentally lets out a string of explicit words, leaving the host and audience in shock.",
        eventMoney: -12000,
        eventCred: -18,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        eventType: "TV Appearance",
        eventTitle: "Wardrobe Woes",
        eventDetails: "During a live TV appearance, your lead singer's outfit malfunctions, leading to a brief wardrobe malfunction.",
        eventMoney: -5000,
        eventCred: -10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        eventType: "Interviews",
        eventTitle: "Prank Misfire",
        eventDetails: "Your band attempts to prank the interviewer, but it backfires and leaves everyone uncomfortable.",
        eventMoney: -7000,
        eventCred: -9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        eventType: "Meet and Greet",
        eventTitle: "Fan No-Show",
        eventDetails: "Few fans show up for a meet and greet, leaving you disappointed.",
        eventMoney: -1000,
        eventCred: -6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        eventType: "Magazine",
        eventTitle: "Tabloid Drama",
        eventDetails: "A tabloid publishes a controversial story about your band, generating buzz but also damaging your reputation.",
        eventMoney: -3000,
        eventCred: -7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        eventType: "Podcast",
        eventTitle: "Bloopers Galore",
        eventDetails: "Your band's podcast is filled with hilarious bloopers and outtakes, entertaining your fans but causing some credibility loss.",
        eventMoney: -6000,
        eventCred: -8,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        eventType: "TV Appearance",
        eventTitle: "Identity Crisis",
        eventDetails: "Your band gets confused with another during a live TV appearance, leading to confusion and a slight loss of credibility.",
        eventMoney: -5000,
        eventCred: -10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        eventType: "Interviews",
        eventTitle: "Mic Drop Disaster",
        eventDetails: "During a live radio interview, your drummer accidentally drops a microphone, leading to technical difficulties and a minor credibility hit.",
        eventMoney: -7000,
        eventCred: -9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        eventType: "Meet and Greet",
        eventTitle: "Empty Seats",
        eventDetails: "Few fans show up for a meet and greet, leaving you somewhat disappointed.",
        eventMoney: -1000,
        eventCred: -6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        eventType: "Magazine",
        eventTitle: "Tabloid Tales",
        eventDetails: "A tabloid publishes scandalous stories about your band, damaging your image and resulting in lost earnings of $3,000 and 7 cred.",
        eventMoney: -3000,
        eventCred: -7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        eventType: "Podcast",
        eventTitle: "Laugh-Out-Loud Episode",
        eventDetails: "Your band's podcast episode becomes a comedy sensation, thanks to your guitarist's unexpected stand-up routine.",
        eventMoney: 15000,
        eventCred: 20,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        eventType: "TV Appearance",
        eventTitle: "Unplanned Comedy Show",
        eventDetails: "During a live TV appearance, your bassist accidentally slips on a banana peel, turning the serious interview into a hilarious comedy show.",
        eventMoney: 12000,
        eventCred: 18,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        eventType: "Interviews",
        eventTitle: "Spontaneous Roast Session",
        eventDetails: "Your band's interview turns into a roast session, with your lead singer humorously poking fun at the interviewer.",
        eventMoney: 10000,
        eventCred: 15,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        eventType: "Meet and Greet",
        eventTitle: "Impromptu Dance Party",
        eventDetails: "During a meet and greet, your drummer cranks up the music, and fans join in for an unexpected dance party.",
        eventMoney: 8000,
        eventCred: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        eventType: "Commercial",
        eventTitle: "Ad Bloopers Galore",
        eventDetails: "Your band's commercial shoot is filled with hilarious bloopers, including your guitarist accidentally setting off a confetti cannon.",
        eventMoney: 18000,
        eventCred: 22,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        eventType: "Podcast",
        eventTitle: "Prankster's Paradise",
        eventDetails: "Your band pulls off a hilarious prank during a podcast, leaving the host and listeners in stitches.",
        eventMoney: 15000,
        eventCred: 20,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        eventType: "TV Appearance",
        eventTitle: "Accidental Stand-Up",
        eventDetails: "During a live TV appearance, your lead singer accidentally starts doing stand-up comedy, cracking up the audience.",
        eventMoney: 12000,
        eventCred: 18,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        eventType: "Interviews",
        eventTitle: "Spontaneous Sketch Show",
        eventDetails: "Your band's interview takes an unexpected turn when you start performing improvised comedy sketches.",
        eventMoney: 10000,
        eventCred: 15,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        eventType: "Meet and Greet",
        eventTitle: "Dance-Off Delight",
        eventDetails: "During a meet and greet, your drummer challenges fans to a dance-off, leading to a spontaneous dance party.",
        eventMoney: 8000,
        eventCred: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        eventType: "Commercial",
        eventTitle: "Hilarious Ad Outtakes",
        eventDetails: "Your band's commercial shoot is filled with comedic mishaps, including your guitarist trying to juggle props.",
        eventMoney: 18000,
        eventCred: 22,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        eventType: "Podcast",
        eventTitle: "Prank Backfire",
        eventDetails: "Your band attempts a prank during a podcast, but it spirals out of control and offends the host. The fallout costs you $12,000 and 18 cred.",
        eventMoney: -12000,
        eventCred: -18,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        eventType: "TV Appearance",
        eventTitle: "Teleprompter Troubles",
        eventDetails: "During a live TV appearance, the teleprompter fails, leaving your lead singer struggling to ad-lib awkwardly, causing financial losses of $15,000 and 20 cred.",
        eventMoney: -15000,
        eventCred: -20,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        eventType: "Interviews",
        eventTitle: "Caught Cursing",
        eventDetails: "Your band gets caught using profanity during a radio interview, leading to fines and a loss of $10,000 and 15 cred.",
        eventMoney: -10000,
        eventCred: -15,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        eventType: "Meet and Greet",
        eventTitle: "Fan Insult Fiasco",
        eventDetails: "During a meet and greet, one of your band members accidentally insults a fan, resulting in lost earnings of $8,000 and 12 cred.",
        eventMoney: -8000,
        eventCred: -12,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        eventType: "Commercial",
        eventTitle: "Hair on Fire",
        eventDetails: "During a commercial shoot, your lead singer's hair accidentally catches fire, causing chaos and a financial loss of $20,000 and 25 cred.",
        eventMoney: -20000,
        eventCred: -25,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ]);
  },
  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Events", null, {});
  },
};


