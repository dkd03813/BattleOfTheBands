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
      // Good Practice Events
      {
        eventType: "Practice",
        eventTitle: "The 'Tangled in Guitar Strings' Incident",
        eventDetails: "Your guitarist gets hilariously tangled in their guitar strings during practice, but the performance goes on, leaving everyone in stitches.",
        eventMoney: 5000,
        eventCred: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        eventType: "Practice",
        eventTitle: "Drummer's 'One-Handed' Solo",
        eventDetails: "Your drummer attempts an ambitious 'one-handed' solo during practice, leading to laughter and applause from the band.",
        eventMoney: 7000,
        eventCred: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        eventType: "Practice",
        eventTitle: "Bass Player's 'Magical' Disappearance",
        eventDetails: "Mid-practice, your bass player pretends to disappear 'magically,' leaving the band momentarily puzzled before bursting into laughter.",
        eventMoney: 8000,
        eventCred: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        eventType: "Practice",
        eventTitle: "Sudden 'Cowbell' Epidemic",
        eventDetails: "Your band breaks into an unexpected 'cowbell epidemic' during practice, resulting in uncontrollable laughter and an uplifted mood.",
        eventMoney: 6000,
        eventCred: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        eventType: "Practice",
        eventTitle: "The 'Switched Instruments' Challenge",
        eventDetails: "For fun, your band members switch instruments during practice, leading to hilarious musical chaos and a memorable bonding experience.",
        eventMoney: 7000,
        eventCred: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // Additional Good Practice Events
      {
        eventType: "Practice",
        eventTitle: "Guitarist's 'Giant Pick' Mishap",
        eventDetails: "Your guitarist comically fumbles with a giant guitar pick during practice, creating a 'larger-than-life' performance that the band won't forget.",
        eventMoney: 5500,
        eventCred: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        eventType: "Practice",
        eventTitle: "Epic Air Guitar Solo",
        eventDetails: "Your lead singer unexpectedly delivers an epic air guitar solo during practice, earning cheers and laughter from the band.",
        eventMoney: 7500,
        eventCred: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        eventType: "Practice",
        eventTitle: "Drumstick Juggling Act",
        eventDetails: "Your drummer puts on a drumstick juggling act during practice, combining music and circus skills for an unforgettable rehearsal.",
        eventMoney: 8000,
        eventCred: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      // Middle Practice Events
      {
        eventType: "Practice",
        eventTitle: "Routine Rehearsal",
        eventDetails: "Your practice goes smoothly, neither gaining nor losing much in terms of earnings or credibility.",
        eventMoney: 0,
        eventCred: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        eventType: "Practice",
        eventTitle: "Coffee Break Chaos",
        eventDetails: "A coffee spill during practice leads to minor equipment mishaps and a few chuckles but no significant impact on earnings or credibility.",
        eventMoney: -1000,
        eventCred: -1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        eventType: "Practice",
        eventTitle: "The 'Wrong Chord' Incident",
        eventDetails: "Your band briefly hits the 'wrong chord' during practice, causing momentary dissonance before getting back on track.",
        eventMoney: -2000,
        eventCred: -2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // Additional Middle Practice Events
      {
        eventType: "Practice",
        eventTitle: "Mismatched Lyrics",
        eventDetails: "Your lead singer accidentally sings mismatched lyrics during practice, resulting in laughter but no significant impact on earnings or credibility.",
        eventMoney: -1500,
        eventCred: -2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        eventType: "Practice",
        eventTitle: "Instrument Swap Confusion",
        eventDetails: "Instrument swapping leads to temporary confusion during practice, but the band quickly recovers, earning respect for their adaptability.",
        eventMoney: -1000,
        eventCred: -1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        eventType: "Practice",
        eventTitle: "Sudden 'Silent Jam' Break",
        eventDetails: "A spontaneous 'silent jam' break during practice leaves everyone puzzled but amused, with no significant impact on earnings or credibility.",
        eventMoney: -500,
        eventCred: -1,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      // Bad Practice Events
      {
        eventType: "Practice",
        eventTitle: "Instrument Cable Fiasco",
        eventDetails: "A comically tangled instrument cable mess disrupts practice, causing frustration and minor monetary losses.",
        eventMoney: -3000,
        eventCred: -3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        eventType: "Practice",
        eventTitle: "The 'Broken Drum Sticks' Incident",
        eventDetails: "Your drummer comically breaks multiple drumsticks during practice, leading to increased expenses and a credibility hit.",
        eventMoney: -5000,
        eventCred: -5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        eventType: "Practice",
        eventTitle: "Sound System Glitch",
        eventDetails: "A quirky sound system glitch disrupts practice, causing frustration, monetary losses, and a minor credibility hit.",
        eventMoney: -4000,
        eventCred: -4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // Additional Bad Practice Events
      {
        eventType: "Practice",
        eventTitle: "Mysterious Missing Drum Kit",
        eventDetails: "Your drummer's entire drum kit mysteriously disappears before practice, resulting in chaos, financial losses, and a major credibility hit.",
        eventMoney: -8000,
        eventCred: -8,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        eventType: "Practice",
        eventTitle: "The 'Ghostly Feedback' Surprise",
        eventDetails: "Unexplained feedback noises haunt your practice, leading to frustration, monetary losses, and a spooky aura in the studio.",
        eventMoney: -6000,
        eventCred: -6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        eventType: "Practice",
        eventTitle: "The 'Vanishing Lyrics' Mystery",
        eventDetails: "Your band experiences a bizarre 'vanishing lyrics' mystery during practice, causing confusion, monetary losses, and a credibility hit.",
        eventMoney: -7000,
        eventCred: -7,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      // Good Concert Events
      {
        eventType: "Concert",
        eventTitle: "The 'Guitar Hero' Moment",
        eventDetails: "Your guitarist delivers a 'Guitar Hero' moment during the concert, wowing the audience and boosting your credibility.",
        eventMoney: 10000,
        eventCred: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        eventType: "Concert",
        eventTitle: "The 'Inflatable Balloon' Extravaganza",
        eventDetails: "Inflatable balloons are released during your concert, creating a whimsical atmosphere and attracting more fans.",
        eventMoney: 8000,
        eventCred: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        eventType: "Concert",
        eventTitle: "Crowd Surfing Craze",
        eventDetails: "Your lead singer goes crowd surfing, creating a memorable moment and elevating your credibility.",
        eventMoney: 9000,
        eventCred: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // Additional Good Concert Events
      {
        eventType: "Concert",
        eventTitle: "The 'Pyrotechnic Surprise'",
        eventDetails: "Unexpected pyrotechnics at your concert surprise the audience, adding a fiery spectacle and boosting your credibility.",
        eventMoney: 12000,
        eventCred: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        eventType: "Concert",
        eventTitle: "Guitarist's 'Behind-the-Back' Solo",
        eventDetails: "Your guitarist stuns the crowd with a jaw-dropping 'behind-the-back' solo, earning admiration and credibility points.",
        eventMoney: 11000,
        eventCred: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // Middle Concert Events
      {
        eventType: "Concert",
        eventTitle: "Routine Performance",
        eventDetails: "Your concert proceeds smoothly, with no significant impact on earnings or credibility.",
        eventMoney: 0,
        eventCred: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        eventType: "Concert",
        eventTitle: "Minor Sound Glitch",
        eventDetails: "A minor sound glitch occurs during your concert, leading to brief disruptions but no major consequences for earnings or credibility.",
        eventMoney: -1000,
        eventCred: -1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        eventType: "Concert",
        eventTitle: "Setlist Mix-Up",
        eventDetails: "A mix-up in the setlist leads to a minor hiccup during your concert, resulting in a slight dip in earnings and credibility.",
        eventMoney: -2000,
        eventCred: -2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // Additional Middle Concert Events
      {
        eventType: "Concert",
        eventTitle: "Sudden Weather Change",
        eventDetails: "Unpredictable weather changes during your outdoor concert lead to minor disruptions and a small impact on earnings and credibility.",
        eventMoney: -3000,
        eventCred: -3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        eventType: "Concert",
        eventTitle: "Lost Guitar Pick",
        eventDetails: "Your guitarist loses their guitar pick mid-performance, causing a brief pause but no significant impact on earnings or credibility.",
        eventMoney: -1500,
        eventCred: -2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // Bad Concert Events
      {
        eventType: "Concert",
        eventTitle: "Massive Crowd Disturbance",
        eventDetails: "A massive crowd disturbance disrupts your concert, leading to financial losses, a chaotic performance, and a credibility hit.",
        eventMoney: -12000,
        eventCred: -12,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        eventType: "Concert",
        eventTitle: "Cancellation Catastrophe",
        eventDetails: "Your concert is canceled at the last minute due to unforeseen circumstances, resulting in significant financial losses and a major credibility hit.",
        eventMoney: -25000,
        eventCred: -20,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        eventType: "Concert",
        eventTitle: "Rainout Fiasco",
        eventDetails: "A sudden rainstorm during your outdoor concert leads to equipment damage, canceled performance, monetary losses, and a major credibility hit.",
        eventMoney: -20000,
        eventCred: -18,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // Additional Bad Concert Events
      {
        eventType: "Concert",
        eventTitle: "Vocal Mishap Meltdown",
        eventDetails: "Your lead singer experiences a comical vocal mishap during the concert, leading to a compromised performance, monetary losses, and a credibility hit.",
        eventMoney: -8000,
        eventCred: -8,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        eventType: "Concert",
        eventTitle: "Stage Collapse Chaos",
        eventDetails: "A section of the stage collapses during your concert, causing panic, injuries, financial losses, and a major credibility hit.",
        eventMoney: -15000,
        eventCred: -15,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
    
  },
  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Events", null, {});
  },
};


