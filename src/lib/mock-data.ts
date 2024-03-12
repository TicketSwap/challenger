const events = [
  {
    id: 1,
    name: "Lowlands Festival",
    alerts: 950,
    date: "2021-08-20T10:00:00+02:00",
    location: "Biddinghuizen",
    description:
      "Tickets for Lowlands Festival live in Biddinghuizen are never sold out with TicketSwap! Safely buy and sell tickets for Lowlands Festival on TicketSwap!",
    imageUrl:
      "https://cdn.ticketswap.com/public/202003/lowlands-festival-2020-biddinghuizen-21-august-2020.image.jpeg",
  },
  {
    id: 2,
    name: "Awakenings Festival 2021 | 20th Anniversary",
    alerts: 193,
    date: "2021-06-26T12:00:00+02:00",
    location: "Recreatiegebied Spaarnwoude",
    description:
      "Tickets for Awakenings Festival 2021 | 20th Anniversary live in Recreatiegebied Spaarnwoude are never sold out with TicketSwap! Safely buy and sell tickets for Awakenings Festival 2021 | 20th Anniversary on TicketSwap!",
    imageUrl:
      "https://cdn.ticketswap.com/public/201912/8e0e134a-bdd0-49ef-8274-92e4d8b14c7a.jpeg",
  },
  {
    id: 3,
    name: "Harry Styles",
    alerts: 781,
    date: "2021-03-27T20:00:00+01:00",
    location: "Ziggo Dome",
    description: null,
    imageUrl:
      "https://cdn.ticketswap.com/public/201911/harry-styles-ziggo-dome-06-may-2020.image.jpeg",
  },
  {
    id: 4,
    name: "Down The Rabbit Hole",
    alerts: 967,
    date: "2021-07-02T10:00:00+02:00",
    location: "Ficarystraat 9 ",
    description:
      "Tickets for Down The Rabbit Hole live in Ficarystraat 9  are never sold out with TicketSwap! Safely buy and sell tickets for Down The Rabbit Hole on TicketSwap!",
    imageUrl:
      "https://cdn.ticketswap.com/public/202003/2fefb873-c8b3-452c-a34c-6d81f24f9a0e.jpeg",
  },
  {
    id: 5,
    name: "Defqon.1 Weekend Festival",
    alerts: 931,
    date: "2021-06-25T13:00:00+02:00",
    location: "Evenemententerrein Walibi",
    description:
      "Tickets for Defqon.1 Weekend Festival live in Evenemententerrein Walibi are never sold out with TicketSwap! Safely buy and sell tickets for Defqon.1 Weekend Festival on TicketSwap!",
    imageUrl:
      "https://cdn.ticketswap.com/static/images/placeholders/festival-4.jpg",
  },
  {
    id: 6,
    name: "Zwarte Cross",
    alerts: 206,
    date: "2021-07-15T12:00:00+02:00",
    location: "Lichtenvoorde Zwarte Cross",
    description: null,
    imageUrl:
      "https://cdn.ticketswap.com/static/images/placeholders/festival-4.jpg",
  },
  {
    id: 7,
    name: "Queen + Adam Lambert",
    alerts: 113,
    date: "2021-05-29T20:00:00+02:00",
    location: "Ziggo Dome",
    description:
      "Tickets for Queen + Adam Lambert live in Ziggo Dome are never sold out with TicketSwap! Safely buy and sell tickets for Queen + Adam Lambert on TicketSwap!",
    imageUrl:
      "https://cdn.ticketswap.com/static/images/placeholders/concert-1.jpg",
  },
  {
    id: 8,
    name: "The Weeknd",
    alerts: 534,
    date: "2021-10-19T20:00:00+02:00",
    location: "Ziggo Dome",
    description:
      "Tickets for The Weeknd live in Ziggo Dome are never sold out with TicketSwap! Safely buy and sell tickets for The Weeknd on TicketSwap!",
    imageUrl:
      "https://cdn.ticketswap.com/static/images/placeholders/concert-3.jpg",
  },
  {
    id: 9,
    name: "Louis Tomlinson",
    alerts: 972,
    date: "2021-09-04T20:00:00+02:00",
    location: "AFAS Live",
    description:
      "Tickets for Louis Tomlinson live in AFAS Live are never sold out with TicketSwap! Safely buy and sell tickets for Louis Tomlinson on TicketSwap!",
    imageUrl:
      "https://cdn.ticketswap.com/static/images/placeholders/concert-7.jpg",
  },
  {
    id: 10,
    name: "Queen + Adam Lambert",
    alerts: 130,
    date: "2021-05-30T20:00:00+02:00",
    location: "Ziggo Dome",
    description: null,
    imageUrl:
      "https://cdn.ticketswap.com/static/images/placeholders/concert-1.jpg",
  },
  {
    id: 11,
    name: "De Vrienden van Amstel Live | 2021",
    alerts: 822,
    date: "2021-01-23T20:00:00+01:00",
    location: "Rotterdam Ahoy",
    description:
      "Tickets for De Vrienden van Amstel Live | 2021 live in Rotterdam Ahoy are never sold out with TicketSwap! Safely buy and sell tickets for De Vrienden van Amstel Live | 2021 on TicketSwap!",
    imageUrl:
      "https://cdn.ticketswap.com/static/images/placeholders/concert-1.jpg",
  },
  {
    id: 12,
    name: "Intents Festival",
    alerts: 811,
    date: "2021-06-04T11:00:00+02:00",
    location: "Oisterwijk",
    description:
      "Tickets for Intents Festival live in Oisterwijk are never sold out with TicketSwap! Safely buy and sell tickets for Intents Festival on TicketSwap!",
    imageUrl:
      "https://cdn.ticketswap.com/static/images/placeholders/festival-4.jpg",
  },
  {
    id: 13,
    name: "Mysteryland 2021",
    alerts: 580,
    date: "2021-08-27T11:00:00+02:00",
    location: "Haarlemmermeer",
    description:
      "Tickets for Mysteryland 2021 live in Haarlemmermeer are never sold out with TicketSwap! Safely buy and sell tickets for Mysteryland 2021 on TicketSwap!",
    imageUrl:
      "https://cdn.ticketswap.com/static/images/placeholders/festival-4.jpg",
  },
  {
    id: 14,
    name: "Masters of Hardcore 2021",
    alerts: 899,
    date: "2021-03-27T22:00:00+01:00",
    location: "Brabanthallen",
    description:
      "Tickets for Masters of Hardcore 2021 live in Brabanthallen are never sold out with TicketSwap! Safely buy and sell tickets for Masters of Hardcore 2021 on TicketSwap!",
    imageUrl:
      "https://cdn.ticketswap.com/public/202003/1e004bd6-6801-48e6-b4c9-9e62ae76cfd9.jpeg",
  },
  {
    id: 15,
    name: "Dua Lipa",
    alerts: 219,
    date: "2021-10-05T19:00:00+02:00",
    location: "Ziggo Dome",
    description:
      "Tickets for Dua Lipa live in Ziggo Dome are never sold out with TicketSwap! Safely buy and sell tickets for Dua Lipa on TicketSwap!",
    imageUrl:
      "https://cdn.ticketswap.com/static/images/placeholders/concert-1.jpg",
  },
  {
    id: 16,
    name: "Total Loss Festival 2021",
    alerts: 288,
    date: "2021-09-04T12:00:00+02:00",
    location: "Aquabest",
    description:
      "Tickets for Total Loss Festival 2021 live in Aquabest are never sold out with TicketSwap! Safely buy and sell tickets for Total Loss Festival 2021 on TicketSwap!",
    imageUrl:
      "https://cdn.ticketswap.com/static/images/placeholders/festival-1.jpg",
  },
  {
    id: 17,
    name: "Nothing But Thieves - The Moral Panic Tour",
    alerts: 750,
    date: "2021-11-12T20:00:00+01:00",
    location: "Ziggo Dome",
    description:
      "Tickets for Nothing But Thieves - The Moral Panic Tour live in Ziggo Dome are never sold out with TicketSwap! Safely buy and sell tickets for Nothing But Thieves - The Moral Panic Tour on TicketSwap!",
    imageUrl:
      "https://cdn.ticketswap.com/static/images/placeholders/concert-7.jpg",
  },
  {
    id: 18,
    name: "De Vrienden van Amstel Live | 2021",
    alerts: 179,
    date: "2021-01-22T20:00:00+01:00",
    location: "Rotterdam Ahoy",
    description:
      "Tickets for De Vrienden van Amstel Live | 2021 live in Rotterdam Ahoy are never sold out with TicketSwap! Safely buy and sell tickets for De Vrienden van Amstel Live | 2021 on TicketSwap!",
    imageUrl:
      "https://cdn.ticketswap.com/static/images/placeholders/concert-1.jpg",
  },
  {
    id: 19,
    name: "Soenda Festival 2021",
    alerts: 876,
    date: "2021-08-28T12:00:00+02:00",
    location: "Utrecht",
    description:
      "Tickets for Soenda Festival 2021 live in Utrecht are never sold out with TicketSwap! Safely buy and sell tickets for Soenda Festival 2021 on TicketSwap!",
    imageUrl:
      "https://cdn.ticketswap.com/static/images/placeholders/festival-4.jpg",
  },
  {
    id: 20,
    name: "Pearl Jam",
    alerts: 516,
    date: "2021-06-17T19:00:00+02:00",
    location: "Ziggo Dome",
    description:
      "Tickets for Pearl Jam live in Ziggo Dome are never sold out with TicketSwap! Safely buy and sell tickets for Pearl Jam on TicketSwap!",
    imageUrl:
      "https://cdn.ticketswap.com/static/images/placeholders/concert-6.jpg",
  },
  {
    id: 21,
    name: "WOO HAH! Festival",
    alerts: 195,
    date: "2021-07-09T10:00:00+02:00",
    location: "Beekse Bergen",
    description: null,
    imageUrl:
      "https://cdn.ticketswap.com/static/images/placeholders/festival-1.jpg",
  },
  {
    id: 22,
    name: "5 Seconds Of Summer",
    alerts: 396,
    date: "2021-04-22T20:00:00+02:00",
    location: "AFAS Live",
    description:
      "Tickets for 5 Seconds Of Summer live in AFAS Live are never sold out with TicketSwap! Safely buy and sell tickets for 5 Seconds Of Summer on TicketSwap!",
    imageUrl:
      "https://cdn.ticketswap.com/static/images/placeholders/concert-7.jpg",
  },
  {
    id: 23,
    name: "NN North Sea Jazz Festival",
    alerts: 219,
    date: "2021-07-09T16:30:00+02:00",
    location: "Rotterdam Ahoy",
    description:
      "Tickets for NN North Sea Jazz Festival live in Rotterdam Ahoy are never sold out with TicketSwap! Safely buy and sell tickets for NN North Sea Jazz Festival on TicketSwap!",
    imageUrl:
      "https://cdn.ticketswap.com/static/images/placeholders/festival-4.jpg",
  },
  {
    id: 24,
    name: "Milkshake Festival 2021",
    alerts: 262,
    date: "2021-07-31T12:00:00+02:00",
    location: "Westerpark",
    description:
      "Tickets for Milkshake Festival 2021 live in Westerpark are never sold out with TicketSwap! Safely buy and sell tickets for Milkshake Festival 2021 on TicketSwap!",
    imageUrl:
      "https://cdn.ticketswap.com/static/images/placeholders/festival-4.jpg",
  },
  {
    id: 25,
    name: "Pinkpop 2021",
    alerts: 197,
    date: "2021-06-18T14:00:00+02:00",
    location: "Megaland",
    description:
      "Tickets for Pinkpop 2021 live in Megaland are never sold out with TicketSwap! Safely buy and sell tickets for Pinkpop 2021 on TicketSwap!",
    imageUrl:
      "https://cdn.ticketswap.com/static/images/placeholders/festival-4.jpg",
  },
  {
    id: 26,
    name: "Tyler, The Creator // IGOR",
    alerts: 35,
    date: "2021-06-07T20:00:00+02:00",
    location: "AFAS Live",
    description: null,
    imageUrl:
      "https://cdn.ticketswap.com/public/201911/0f7ceef9-98de-488f-8dc0-39c7e04f2da5.jpeg",
  },
  {
    id: 27,
    name: "Jubileumeditie Heroes Dutch Comic Con",
    alerts: 694,
    date: "2021-06-19T10:00:00+02:00",
    location: "Jaarbeurs",
    description:
      "Tickets for Jubileumeditie Heroes Dutch Comic Con live in Jaarbeurs are never sold out with TicketSwap! Safely buy and sell tickets for Jubileumeditie Heroes Dutch Comic Con on TicketSwap!",
    imageUrl:
      "https://cdn.ticketswap.com/static/images/placeholders/voucher-day-out.jpg",
  },
  {
    id: 28,
    name: "Eric Clapton",
    alerts: 782,
    date: "2021-06-11T20:00:00+02:00",
    location: "Ziggo Dome",
    description:
      "Tickets for Eric Clapton live in Ziggo Dome are never sold out with TicketSwap! Safely buy and sell tickets for Eric Clapton on TicketSwap!",
    imageUrl:
      "https://cdn.ticketswap.com/static/images/placeholders/concert-1.jpg",
  },
  {
    id: 29,
    name: "Snollebollekes",
    alerts: 563,
    date: "2021-10-09T20:00:00+02:00",
    location: "GelreDome",
    description:
      "Tickets for Snollebollekes live in GelreDome are never sold out with TicketSwap! Safely buy and sell tickets for Snollebollekes on TicketSwap!",
    imageUrl:
      "https://cdn.ticketswap.com/static/images/placeholders/concert-1.jpg",
  },
  {
    id: 30,
    name: "Snoop Dogg",
    alerts: 83,
    date: "2021-09-22T18:00:00+02:00",
    location: "Ziggo Dome",
    description:
      "Tickets for Snoop Dogg live in Ziggo Dome are never sold out with TicketSwap! Safely buy and sell tickets for Snoop Dogg on TicketSwap!",
    imageUrl:
      "https://cdn.ticketswap.com/public/201911/snoop-dogg-ziggo-dome-07-april-2020.image.jpeg",
  },
  {
    id: 31,
    name: "Rammstein",
    alerts: 877,
    date: "2021-08-03T19:00:00+02:00",
    location: "Goffertpark",
    description:
      "Tickets for Rammstein live in Goffertpark are never sold out with TicketSwap! Safely buy and sell tickets for Rammstein on TicketSwap!",
    imageUrl:
      "https://cdn.ticketswap.com/static/images/placeholders/concert-7.jpg",
  },
  {
    id: 32,
    name: "Snollebollekes",
    alerts: 407,
    date: "2021-10-16T18:00:00+02:00",
    location: "GelreDome",
    description:
      "Tickets for Snollebollekes live in GelreDome are never sold out with TicketSwap! Safely buy and sell tickets for Snollebollekes on TicketSwap!",
    imageUrl:
      "https://cdn.ticketswap.com/static/images/placeholders/concert-1.jpg",
  },
  {
    id: 33,
    name: "Nightwish",
    alerts: 236,
    date: "2021-05-09T20:00:00+02:00",
    location: "Ziggo Dome",
    description:
      "Tickets for Nightwish live in Ziggo Dome are never sold out with TicketSwap! Safely buy and sell tickets for Nightwish on TicketSwap!",
    imageUrl:
      "https://cdn.ticketswap.com/static/images/placeholders/concert-1.jpg",
  },
  {
    id: 34,
    name: "Pearl Jam",
    alerts: 91,
    date: "2021-06-16T20:00:00+02:00",
    location: "Ziggo Dome",
    description:
      "Tickets for Pearl Jam live in Ziggo Dome are never sold out with TicketSwap! Safely buy and sell tickets for Pearl Jam on TicketSwap!",
    imageUrl:
      "https://cdn.ticketswap.com/static/images/placeholders/concert-1.jpg",
  },
  {
    id: 35,
    name: "Groots met een Zachte G - Guus Meeuwis",
    alerts: 202,
    date: "2021-06-11T19:45:00+02:00",
    location: "Philips Stadion",
    description:
      "Tickets for Groots met een Zachte G - Guus Meeuwis live in Philips Stadion are never sold out with TicketSwap! Safely buy and sell tickets for Groots met een Zachte G - Guus Meeuwis on TicketSwap!",
    imageUrl:
      "https://cdn.ticketswap.com/static/images/placeholders/concert-1.jpg",
  },
  {
    id: 36,
    name: "Kensington",
    alerts: 672,
    date: "2021-12-02T18:30:00+01:00",
    location: "Ziggo Dome",
    description:
      "Tickets for Kensington live in Ziggo Dome are never sold out with TicketSwap! Safely buy and sell tickets for Kensington on TicketSwap!",
    imageUrl:
      "https://cdn.ticketswap.com/static/images/placeholders/concert-7.jpg",
  },
  {
    id: 37,
    name: "Tino Martin - Viva Las Vegas",
    alerts: 289,
    date: "2021-04-30T20:00:00+02:00",
    location: "Ziggo Dome",
    description:
      "Tickets for Tino Martin - Viva Las Vegas live in Ziggo Dome are never sold out with TicketSwap! Safely buy and sell tickets for Tino Martin - Viva Las Vegas on TicketSwap!",
    imageUrl:
      "https://cdn.ticketswap.com/static/images/placeholders/concert-1.jpg",
  },
  {
    id: 38,
    name: "Decibel Outdoor 2021",
    alerts: 839,
    date: "2021-08-20T13:00:00+02:00",
    location: "Beekse Bergen",
    description:
      "Tickets for Decibel Outdoor 2021 live in Beekse Bergen are never sold out with TicketSwap! Safely buy and sell tickets for Decibel Outdoor 2021 on TicketSwap!",
    imageUrl:
      "https://cdn.ticketswap.com/public/202001/710cc94a-4774-41c0-afbb-b6cfa54f806c.jpeg",
  },
  {
    id: 39,
    name: "Paradigm Festival",
    alerts: 641,
    date: "2021-08-13T15:00:00+02:00",
    location: "Paradigm",
    description: null,
    imageUrl:
      "https://cdn.ticketswap.com/static/images/placeholders/festival-4.jpg",
  },
  {
    id: 40,
    name: "Kensington",
    alerts: 477,
    date: "2021-12-04T20:00:00+01:00",
    location: "Ziggo Dome",
    description:
      "Tickets for Kensington live in Ziggo Dome are never sold out with TicketSwap! Safely buy and sell tickets for Kensington on TicketSwap!",
    imageUrl:
      "https://cdn.ticketswap.com/static/images/placeholders/concert-1.jpg",
  },
  {
    id: 41,
    name: "Mystic Garden Festival 2021",
    alerts: 52,
    date: "2021-06-19T12:00:00+02:00",
    location: "Mystic Garden Festival",
    description:
      "Tickets for Mystic Garden Festival 2021 live in Mystic Garden Festival are never sold out with TicketSwap! Safely buy and sell tickets for Mystic Garden Festival 2021 on TicketSwap!",
    imageUrl:
      "https://cdn.ticketswap.com/static/images/placeholders/festival-1.jpg",
  },
  {
    id: 42,
    name: "ParkCity Live",
    alerts: 717,
    date: "2021-07-17T12:00:00+02:00",
    location: "Park Bekkerveld",
    description:
      "Tickets for ParkCity Live live in Park Bekkerveld are never sold out with TicketSwap! Safely buy and sell tickets for ParkCity Live on TicketSwap!",
    imageUrl:
      "https://cdn.ticketswap.com/static/images/placeholders/festival-4.jpg",
  },
  {
    id: 43,
    name: "Snollebollekes (familieshow)",
    alerts: 893,
    date: "2021-10-13T16:30:00+02:00",
    location: "GelreDome",
    description:
      "Tickets for Snollebollekes (familieshow) live in GelreDome are never sold out with TicketSwap! Safely buy and sell tickets for Snollebollekes (familieshow) on TicketSwap!",
    imageUrl:
      "https://cdn.ticketswap.com/static/images/placeholders/concert-1.jpg",
  },
  {
    id: 44,
    name: "Tom Jones",
    alerts: 872,
    date: "2021-06-22T20:00:00+02:00",
    location: "Ziggo Dome",
    description:
      "Tickets for Tom Jones live in Ziggo Dome are never sold out with TicketSwap! Safely buy and sell tickets for Tom Jones on TicketSwap!",
    imageUrl:
      "https://cdn.ticketswap.com/static/images/placeholders/concert-5.jpg",
  },
  {
    id: 45,
    name: "Iron Maiden",
    alerts: 542,
    date: "2021-07-10T18:00:00+02:00",
    location: "GelreDome",
    description:
      "Tickets for Iron Maiden live in GelreDome are never sold out with TicketSwap! Safely buy and sell tickets for Iron Maiden on TicketSwap!",
    imageUrl:
      "https://cdn.ticketswap.com/static/images/placeholders/concert-1.jpg",
  },
  {
    id: 46,
    name: "Holland Zingt Hazes 2021",
    alerts: 237,
    date: "2021-08-28T20:15:00+02:00",
    location: "Ziggo Dome",
    description:
      "Tickets for Holland Zingt Hazes 2021 live in Ziggo Dome are never sold out with TicketSwap! Safely buy and sell tickets for Holland Zingt Hazes 2021 on TicketSwap!",
    imageUrl:
      "https://cdn.ticketswap.com/static/images/placeholders/concert-1.jpg",
  },
  {
    id: 47,
    name: "Ground Zero Festival 2021",
    alerts: 187,
    date: "2021-08-28T21:00:00+02:00",
    location: "Ground Zero",
    description:
      "Tickets for Ground Zero Festival 2021 live in Ground Zero are never sold out with TicketSwap! Safely buy and sell tickets for Ground Zero Festival 2021 on TicketSwap!",
    imageUrl:
      "https://cdn.ticketswap.com/static/images/placeholders/festival-4.jpg",
  },
  {
    id: 48,
    name: "Dance Valley 2021",
    alerts: 988,
    date: "2021-08-14T12:00:00+02:00",
    location: "Oostbroekerweg 1",
    description:
      "Tickets for Dance Valley 2021 live in Oostbroekerweg 1 are never sold out with TicketSwap! Safely buy and sell tickets for Dance Valley 2021 on TicketSwap!",
    imageUrl:
      "https://cdn.ticketswap.com/static/images/placeholders/festival-4.jpg",
  },
  {
    id: 49,
    name: "Simply Red",
    alerts: 338,
    date: "2021-11-14T20:00:00+01:00",
    location: "Ziggo Dome",
    description:
      "Tickets for Simply Red live in Ziggo Dome are never sold out with TicketSwap! Safely buy and sell tickets for Simply Red on TicketSwap!",
    imageUrl:
      "https://cdn.ticketswap.com/public/201911/simply-red-ziggo-dome-27-november-2020.image.jpeg",
  },
  {
    id: 50,
    name: "Oh Wonder",
    alerts: 499,
    date: "2021-11-17T19:00:00+01:00",
    location: "Paradiso",
    description:
      "Tickets for Oh Wonder live in Paradiso are never sold out with TicketSwap! Safely buy and sell tickets for Oh Wonder on TicketSwap!",
    imageUrl:
      "https://cdn.ticketswap.com/static/images/placeholders/concert-1.jpg",
  },
  {
    id: 51,
    name: "Liquicity Festival",
    alerts: 123,
    date: "2021-07-16T13:00:00+02:00",
    location: "Recreatiegebied Geestmerambacht",
    description:
      "Tickets for Liquicity Festival live in Recreatiegebied Geestmerambacht are never sold out with TicketSwap! Safely buy and sell tickets for Liquicity Festival on TicketSwap!",
    imageUrl:
      "https://cdn.ticketswap.com/static/images/placeholders/festival-4.jpg",
  },
  {
    id: 52,
    name: "Ibrahim Maalouf",
    alerts: 694,
    date: "2021-03-28T20:00:00+02:00",
    location: "TivoliVredenburg",
    description: null,
    imageUrl:
      "https://cdn.ticketswap.com/public/202001/ee6e2c35-174d-4d81-b692-c22a4ec27d4f.jpeg",
  },
  {
    id: 53,
    name: "Armin van Buuren presents This Is Me | 21:00 CET",
    alerts: 170,
    date: "2021-05-22T21:00:00+02:00",
    location: "Ziggo Dome",
    description:
      "Tickets for Armin van Buuren presents This Is Me | 21:00 CET live in Ziggo Dome are never sold out with TicketSwap! Safely buy and sell tickets for Armin van Buuren presents This Is Me | 21:00 CET on TicketSwap!",
    imageUrl:
      "https://cdn.ticketswap.com/static/images/placeholders/concert-7.jpg",
  },
  {
    id: 54,
    name: "The Chainsmokers",
    alerts: 815,
    date: "2021-11-11T20:00:00+01:00",
    location: "Ziggo Dome",
    description:
      "Tickets for The Chainsmokers live in Ziggo Dome are never sold out with TicketSwap! Safely buy and sell tickets for The Chainsmokers on TicketSwap!",
    imageUrl:
      "https://cdn.ticketswap.com/static/images/placeholders/concert-5.jpg",
  },
  {
    id: 55,
    name: "Dominator Festival 2021",
    alerts: 806,
    date: "2021-07-17T11:00:00+02:00",
    location: "Landgoed Duynenwater",
    description:
      "Tickets for Dominator Festival 2021 live in Landgoed Duynenwater are never sold out with TicketSwap! Safely buy and sell tickets for Dominator Festival 2021 on TicketSwap!",
    imageUrl:
      "https://cdn.ticketswap.com/static/images/placeholders/festival-4.jpg",
  },
  {
    id: 56,
    name: "Music On Festival 2021",
    alerts: 864,
    date: "2021-05-08T12:00:00+02:00",
    location: "Havenpark",
    description:
      "Tickets for Music On Festival 2021 live in Havenpark are never sold out with TicketSwap! Safely buy and sell tickets for Music On Festival 2021 on TicketSwap!",
    imageUrl:
      "https://cdn.ticketswap.com/static/images/placeholders/festival-4.jpg",
  },
  {
    id: 57,
    name: "Groots met een Zachte G - Guus Meeuwis",
    alerts: 712,
    date: "2021-06-12T19:45:00+02:00",
    location: "Philips Stadion",
    description:
      "Tickets for Groots met een Zachte G - Guus Meeuwis live in Philips Stadion are never sold out with TicketSwap! Safely buy and sell tickets for Groots met een Zachte G - Guus Meeuwis on TicketSwap!",
    imageUrl:
      "https://cdn.ticketswap.com/static/images/placeholders/concert-6.jpg",
  },
  {
    id: 58,
    name: "Best Kept Secret Festival 2021",
    alerts: 399,
    date: "2021-06-11T14:00:00+02:00",
    location: null,
    description:
      "Tickets for Best Kept Secret Festival 2021 live in ul are never sold out with TicketSwap! Safely buy and sell tickets for Best Kept Secret Festival 2021 on TicketSwap!",
    imageUrl:
      "https://cdn.ticketswap.com/static/images/placeholders/festival-4.jpg",
  },
  {
    id: 59,
    name: "DI-RECT",
    alerts: 696,
    date: "2021-10-22T18:30:00+02:00",
    location: "Rotterdam Ahoy",
    description:
      "Tickets for DI-RECT live in Rotterdam Ahoy are never sold out with TicketSwap! Safely buy and sell tickets for DI-RECT on TicketSwap!",
    imageUrl:
      "https://cdn.ticketswap.com/static/images/placeholders/concert-1.jpg",
  },
  {
    id: 60,
    name: "Armin van Buuren presents This Is Me",
    alerts: 54,
    date: "2021-05-20T21:00:00+02:00",
    location: "Ziggo Dome",
    description:
      "Tickets for Armin van Buuren presents This Is Me live in Ziggo Dome are never sold out with TicketSwap! Safely buy and sell tickets for Armin van Buuren presents This Is Me on TicketSwap!",
    imageUrl:
      "https://cdn.ticketswap.com/public/201911/armin-van-buuren-presents-this-is-me-ziggo-dome-20-may-2020.image.jpeg",
  },
  {
    id: 61,
    name: "Simple Minds",
    alerts: 439,
    date: "2021-09-04T20:00:00+02:00",
    location: "Ziggo Dome",
    description:
      "Tickets for Simple Minds live in Ziggo Dome are never sold out with TicketSwap! Safely buy and sell tickets for Simple Minds on TicketSwap!",
    imageUrl:
      "https://cdn.ticketswap.com/static/images/placeholders/concert-4.jpg",
  },
  {
    id: 62,
    name: "Amsterdam Open Air 2021",
    alerts: 708,
    date: "2021-06-05T12:00:00+02:00",
    location: "Gaasperpark",
    description:
      "Tickets for Amsterdam Open Air 2021 live in Gaasperpark are never sold out with TicketSwap! Safely buy and sell tickets for Amsterdam Open Air 2021 on TicketSwap!",
    imageUrl:
      "https://cdn.ticketswap.com/public/202002/amsterdam-open-air-2020-gaasperpark-06-june-2020.image.jpeg",
  },
  {
    id: 63,
    name: "REBiRTH Festival",
    alerts: 779,
    date: "2021-04-09T00:00:00+02:00",
    location: "Feesttent Raamse Akkers",
    description:
      "Tickets for REBiRTH Festival live in Feesttent Raamse Akkers are never sold out with TicketSwap! Safely buy and sell tickets for REBiRTH Festival on TicketSwap!",
    imageUrl:
      "https://cdn.ticketswap.com/static/images/placeholders/festival-4.jpg",
  },
  {
    id: 64,
    name: "John Legend | North Sea Jazz 2021 - Grand Opening Night",
    alerts: 611,
    date: "2021-07-08T20:00:00+02:00",
    location: "Rotterdam Ahoy",
    description:
      "Tickets for John Legend | North Sea Jazz 2021 - Grand Opening Night live in Rotterdam Ahoy are never sold out with TicketSwap! Safely buy and sell tickets for John Legend | North Sea Jazz 2021 - Grand Opening Night on TicketSwap!",
    imageUrl:
      "https://cdn.ticketswap.com/static/images/placeholders/concert-1.jpg",
  },
  {
    id: 65,
    name: "Snelle",
    alerts: 438,
    date: "2021-04-14T19:00:00+02:00",
    location: "AFAS Live",
    description:
      "Tickets for Snelle live in AFAS Live are never sold out with TicketSwap! Safely buy and sell tickets for Snelle on TicketSwap!",
    imageUrl:
      "https://cdn.ticketswap.com/static/images/placeholders/concert-1.jpg",
  },
  {
    id: 66,
    name: "CamelPhat (all night long)",
    alerts: 740,
    date: "2021-01-22T23:00:00+01:00",
    location: "De Marktkantine",
    description:
      "Tickets for CamelPhat (all night long) live in De Marktkantine are never sold out with TicketSwap! Safely buy and sell tickets for CamelPhat (all night long) on TicketSwap!",
    imageUrl:
      "https://cdn.ticketswap.com/static/images/placeholders/club-night-3.jpg",
  },
  {
    id: 67,
    name: "Beste Zangers Live",
    alerts: 212,
    date: "2021-09-11T19:00:00+02:00",
    location: "Rotterdam Ahoy",
    description:
      "Tickets for Beste Zangers Live live in Rotterdam Ahoy are never sold out with TicketSwap! Safely buy and sell tickets for Beste Zangers Live on TicketSwap!",
    imageUrl:
      "https://cdn.ticketswap.com/static/images/placeholders/concert-6.jpg",
  },
  {
    id: 68,
    name: "Toppers in Concert",
    alerts: 300,
    date: "2021-12-22T20:30:00+01:00",
    location: "Rotterdam Ahoy",
    description:
      "Tickets for Toppers in Concert live in Rotterdam Ahoy are never sold out with TicketSwap! Safely buy and sell tickets for Toppers in Concert on TicketSwap!",
    imageUrl:
      "https://cdn.ticketswap.com/static/images/placeholders/concert-1.jpg",
  },
  {
    id: 69,
    name: "Armin van Buuren presents This Is Me",
    alerts: 522,
    date: "2021-05-21T21:00:00+02:00",
    location: "Ziggo Dome",
    description:
      "Tickets for Armin van Buuren presents This Is Me live in Ziggo Dome are never sold out with TicketSwap! Safely buy and sell tickets for Armin van Buuren presents This Is Me on TicketSwap!",
    imageUrl:
      "https://cdn.ticketswap.com/static/images/placeholders/concert-1.jpg",
  },
  {
    id: 70,
    name: "Loveland Festival 2021 | 25YRS",
    alerts: 53,
    date: "2021-08-07T12:00:00+02:00",
    location: "Sloterpark",
    description:
      "Tickets for Loveland Festival 2021 | 25YRS live in Sloterpark are never sold out with TicketSwap! Safely buy and sell tickets for Loveland Festival 2021 | 25YRS on TicketSwap!",
    imageUrl:
      "https://cdn.ticketswap.com/static/images/placeholders/festival-4.jpg",
  },
  {
    id: 71,
    name: "Simply Red",
    alerts: 738,
    date: "2021-11-15T20:00:00+01:00",
    location: "Ziggo Dome",
    description:
      "Tickets for Simply Red live in Ziggo Dome are never sold out with TicketSwap! Safely buy and sell tickets for Simply Red on TicketSwap!",
    imageUrl:
      "https://cdn.ticketswap.com/static/images/placeholders/concert-1.jpg",
  },
  {
    id: 72,
    name: "Maluma - 11:11 World Tour",
    alerts: 38,
    date: "2021-06-09T20:00:00+02:00",
    location: "Ziggo Dome",
    description:
      "Tickets for Maluma - 11:11 World Tour live in Ziggo Dome are never sold out with TicketSwap! Safely buy and sell tickets for Maluma - 11:11 World Tour on TicketSwap!",
    imageUrl:
      "https://cdn.ticketswap.com/static/images/placeholders/concert-1.jpg",
  },
  {
    id: 73,
    name: "Within Temptation & Evanescence",
    alerts: 472,
    date: "2021-09-18T19:00:00+02:00",
    location: "Ziggo Dome",
    description:
      "Tickets for Within Temptation & Evanescence live in Ziggo Dome are never sold out with TicketSwap! Safely buy and sell tickets for Within Temptation & Evanescence on TicketSwap!",
    imageUrl:
      "https://cdn.ticketswap.com/static/images/placeholders/concert-2.jpg",
  },
  {
    id: 74,
    name: "Beyond Sensation 2021",
    alerts: 293,
    date: "2021-07-03T21:00:00+02:00",
    location: "Johan Cruijff ArenA",
    description:
      "Tickets for Beyond Sensation 2021 live in Johan Cruijff ArenA are never sold out with TicketSwap! Safely buy and sell tickets for Beyond Sensation 2021 on TicketSwap!",
    imageUrl:
      "https://cdn.ticketswap.com/public/202002/c62bd556-4ab3-4ac9-b651-29645ec6a3ca.jpeg",
  },
  {
    id: 75,
    name: "Gregory Porter",
    alerts: 340,
    date: "2022-04-20T19:30:00+02:00",
    location: "Ziggo Dome",
    description:
      "Tickets for Gregory Porter live in Ziggo Dome are never sold out with TicketSwap! Safely buy and sell tickets for Gregory Porter on TicketSwap!",
    imageUrl:
      "https://cdn.ticketswap.com/static/images/placeholders/concert-1.jpg",
  },
  {
    id: 76,
    name: "Mañana Mañana 2021",
    alerts: 327,
    date: "2021-06-10T16:00:00+02:00",
    location: "Kasteel Vorden",
    description:
      "Tickets for Mañana Mañana 2021 live in Kasteel Vorden are never sold out with TicketSwap! Safely buy and sell tickets for Mañana Mañana 2021 on TicketSwap!",
    imageUrl:
      "https://cdn.ticketswap.com/static/images/placeholders/voucher-day-out.jpg",
  },
  {
    id: 77,
    name: "Beste Zangers Live",
    alerts: 640,
    date: "2021-09-10T19:00:00+02:00",
    location: "Rotterdam Ahoy",
    description:
      "Tickets for Beste Zangers Live live in Rotterdam Ahoy are never sold out with TicketSwap! Safely buy and sell tickets for Beste Zangers Live on TicketSwap!",
    imageUrl:
      "https://cdn.ticketswap.com/static/images/placeholders/concert-5.jpg",
  },
  {
    id: 78,
    name: "Alanis Morissette",
    alerts: 585,
    date: "2021-10-31T20:00:00+01:00",
    location: "Ziggo Dome",
    description:
      "Tickets for Alanis Morissette live in Ziggo Dome are never sold out with TicketSwap! Safely buy and sell tickets for Alanis Morissette on TicketSwap!",
    imageUrl:
      "https://cdn.ticketswap.com/static/images/placeholders/concert-5.jpg",
  },
  {
    id: 79,
    name: "Snollebollekes",
    alerts: 831,
    date: "2021-10-08T20:00:00+02:00",
    location: "GelreDome",
    description:
      "Tickets for Snollebollekes live in GelreDome are never sold out with TicketSwap! Safely buy and sell tickets for Snollebollekes on TicketSwap!",
    imageUrl:
      "https://cdn.ticketswap.com/static/images/placeholders/concert-2.jpg",
  },
  {
    id: 80,
    name: "Intercell - I Hate Models",
    alerts: 92,
    date: "2021-12-17T23:00:00+01:00",
    location: "H7 Warehouse",
    description:
      "Tickets for Intercell - I Hate Models live in H7 Warehouse are never sold out with TicketSwap! Safely buy and sell tickets for Intercell - I Hate Models on TicketSwap!",
    imageUrl:
      "https://cdn.ticketswap.com/static/images/placeholders/club-night-2.jpg",
  },
  {
    id: 81,
    name: "DI-RECT",
    alerts: 700,
    date: "2021-10-23T18:30:00+02:00",
    location: "Rotterdam Ahoy",
    description:
      "Tickets for DI-RECT live in Rotterdam Ahoy are never sold out with TicketSwap! Safely buy and sell tickets for DI-RECT on TicketSwap!",
    imageUrl:
      "https://cdn.ticketswap.com/static/images/placeholders/concert-1.jpg",
  },
  {
    id: 82,
    name: "Verknipt Festival 2021",
    alerts: 851,
    date: "2021-06-12T12:00:00+02:00",
    location: "Recreatieplas Strijkviertel",
    description:
      "Tickets for Verknipt Festival 2021 live in Recreatieplas Strijkviertel are never sold out with TicketSwap! Safely buy and sell tickets for Verknipt Festival 2021 on TicketSwap!",
    imageUrl:
      "https://cdn.ticketswap.com/static/images/placeholders/festival-4.jpg",
  },
  {
    id: 83,
    name: "HRVY",
    alerts: 959,
    date: "2021-04-14T20:30:00+02:00",
    location: "Paradiso",
    description:
      "Tickets for HRVY live in Paradiso are never sold out with TicketSwap! Safely buy and sell tickets for HRVY on TicketSwap!",
    imageUrl:
      "https://cdn.ticketswap.com/static/images/placeholders/concert-7.jpg",
  },
  {
    id: 84,
    name: "Muziekfeest van Het Jaar 2021",
    alerts: 915,
    date: "2021-12-11T20:00:00+01:00",
    location: "Ziggo Dome",
    description:
      "Tickets for Muziekfeest van Het Jaar 2021 live in Ziggo Dome are never sold out with TicketSwap! Safely buy and sell tickets for Muziekfeest van Het Jaar 2021 on TicketSwap!",
    imageUrl:
      "https://cdn.ticketswap.com/static/images/placeholders/concert-1.jpg",
  },
  {
    id: 85,
    name: "The Driver Era",
    alerts: 317,
    date: "2021-05-13T20:30:00+02:00",
    location: "Paradiso Noord (Tolhuistuin)",
    description:
      "Tickets for The Driver Era live in Paradiso Noord (Tolhuistuin) are never sold out with TicketSwap! Safely buy and sell tickets for The Driver Era on TicketSwap!",
    imageUrl:
      "https://cdn.ticketswap.com/static/images/placeholders/concert-4.jpg",
  },
  {
    id: 86,
    name: "ZeeZout at the Beach with Ki/Ki",
    alerts: 566,
    date: "2021-08-08T17:00:00+02:00",
    location: "Woodstock 69",
    description:
      "Tickets for ZeeZout at the Beach with Ki/Ki live in Woodstock 69 are never sold out with TicketSwap! Safely buy and sell tickets for ZeeZout at the Beach with Ki/Ki on TicketSwap!",
    imageUrl:
      "https://cdn.ticketswap.com/static/images/placeholders/festival-3.jpg",
  },
  {
    id: 87,
    name: "Reinier Zonneveld presents: Live NOW Festival",
    alerts: 342,
    date: "2021-08-28T12:00:00+02:00",
    location: "Hembrugterrein",
    description:
      "Tickets for Reinier Zonneveld presents: Live NOW Festival live in Hembrugterrein are never sold out with TicketSwap! Safely buy and sell tickets for Reinier Zonneveld presents: Live NOW Festival on TicketSwap!",
    imageUrl:
      "https://cdn.ticketswap.com/static/images/placeholders/festival-4.jpg",
  },
  {
    id: 88,
    name: "Charly Lownoise & Mental Theo: The Final Show",
    alerts: 764,
    date: "2021-12-18T22:00:00+01:00",
    location: "Ziggo Dome",
    description:
      "Tickets for Charly Lownoise & Mental Theo: The Final Show live in Ziggo Dome are never sold out with TicketSwap! Safely buy and sell tickets for Charly Lownoise & Mental Theo: The Final Show on TicketSwap!",
    imageUrl:
      "https://cdn.ticketswap.com/static/images/placeholders/concert-6.jpg",
  },
  {
    id: 89,
    name: "Gabriel Iglesias - Beyond The Fluffy World Tour",
    alerts: 627,
    date: "2021-06-07T20:00:00+02:00",
    location: "Rotterdam Ahoy",
    description:
      "Tickets for Gabriel Iglesias - Beyond The Fluffy World Tour live in Rotterdam Ahoy are never sold out with TicketSwap! Safely buy and sell tickets for Gabriel Iglesias - Beyond The Fluffy World Tour on TicketSwap!",
    imageUrl:
      "https://cdn.ticketswap.com/static/images/placeholders/concert-1.jpg",
  },
  {
    id: 90,
    name: "Vunzige Deuntjes Festival 2021",
    alerts: 584,
    date: "2021-06-26T12:00:00+02:00",
    location: "Amsterdamse Bos",
    description:
      "Tickets for Vunzige Deuntjes Festival 2021 live in Amsterdamse Bos are never sold out with TicketSwap! Safely buy and sell tickets for Vunzige Deuntjes Festival 2021 on TicketSwap!",
    imageUrl:
      "https://cdn.ticketswap.com/static/images/placeholders/festival-4.jpg",
  },
  {
    id: 91,
    name: "Holland Zingt Hazes 2021",
    alerts: 968,
    date: "2021-08-27T20:15:00+02:00",
    location: "Ziggo Dome",
    description:
      "Tickets for Holland Zingt Hazes 2021 live in Ziggo Dome are never sold out with TicketSwap! Safely buy and sell tickets for Holland Zingt Hazes 2021 on TicketSwap!",
    imageUrl:
      "https://cdn.ticketswap.com/static/images/placeholders/concert-5.jpg",
  },
  {
    id: 92,
    name: "Avril Lavigne",
    alerts: 596,
    date: "2021-02-24T20:00:00+01:00",
    location: "AFAS Live",
    description:
      "Tickets for Avril Lavigne live in AFAS Live are never sold out with TicketSwap! Safely buy and sell tickets for Avril Lavigne on TicketSwap!",
    imageUrl:
      "https://cdn.ticketswap.com/static/images/placeholders/concert-1.jpg",
  },
  {
    id: 93,
    name: "Happy Feelings Lente Festival",
    alerts: 840,
    date: "2021-06-12T13:00:00+02:00",
    location: "Thuishaven",
    description:
      "Tickets for Happy Feelings Lente Festival live in Thuishaven are never sold out with TicketSwap! Safely buy and sell tickets for Happy Feelings Lente Festival on TicketSwap!",
    imageUrl:
      "https://cdn.ticketswap.com/static/images/placeholders/festival-4.jpg",
  },
  {
    id: 94,
    name: "Snelle",
    alerts: 973,
    date: "2021-04-15T19:00:00+02:00",
    location: "AFAS Live",
    description: null,
    imageUrl:
      "https://cdn.ticketswap.com/static/images/placeholders/concert-1.jpg",
  },
  {
    id: 95,
    name: "Eefje de Visser",
    alerts: 863,
    date: "2021-05-28T20:00:00+02:00",
    location: "Koninklijk Theater Carré",
    description:
      "Tickets for Eefje de Visser live in Koninklijk Theater Carré are never sold out with TicketSwap! Safely buy and sell tickets for Eefje de Visser on TicketSwap!",
    imageUrl:
      "https://cdn.ticketswap.com/static/images/placeholders/default-2.jpg",
  },
  {
    id: 96,
    name: "Tino Martin - Viva Las Vegas",
    alerts: 137,
    date: "2021-05-01T20:00:00+02:00",
    location: "Ziggo Dome",
    description:
      "Tickets for Tino Martin - Viva Las Vegas live in Ziggo Dome are never sold out with TicketSwap! Safely buy and sell tickets for Tino Martin - Viva Las Vegas on TicketSwap!",
    imageUrl:
      "https://cdn.ticketswap.com/static/images/placeholders/concert-1.jpg",
  },
  {
    id: 97,
    name: "Doe Maar",
    alerts: 478,
    date: "2021-10-13T20:30:00+02:00",
    location: "Paard",
    description:
      "Tickets for Doe Maar live in Paard are never sold out with TicketSwap! Safely buy and sell tickets for Doe Maar on TicketSwap!",
    imageUrl:
      "https://cdn.ticketswap.com/static/images/placeholders/concert-7.jpg",
  },
  {
    id: 98,
    name: "Boothstock 2021",
    alerts: 948,
    date: "2021-06-12T13:00:00+02:00",
    location: "Kralingse Bos",
    description:
      "Tickets for Boothstock 2021 live in Kralingse Bos are never sold out with TicketSwap! Safely buy and sell tickets for Boothstock 2021 on TicketSwap!",
    imageUrl:
      "https://cdn.ticketswap.com/static/images/placeholders/festival-4.jpg",
  },
  {
    id: 99,
    name: "Within Temptation & Evanescence",
    alerts: 345,
    date: "2021-09-17T19:00:00+02:00",
    location: "Ziggo Dome",
    description:
      "Tickets for Within Temptation & Evanescence live in Ziggo Dome are never sold out with TicketSwap! Safely buy and sell tickets for Within Temptation & Evanescence on TicketSwap!",
    imageUrl:
      "https://cdn.ticketswap.com/static/images/placeholders/concert-1.jpg",
  },
  {
    id: 100,
    name: "Declan McKenna",
    alerts: 537,
    date: "2021-04-29T19:00:00+02:00",
    location: "Melkweg",
    description:
      "Tickets for Declan McKenna live in Melkweg are never sold out with TicketSwap! Safely buy and sell tickets for Declan McKenna on TicketSwap!",
    imageUrl:
      "https://cdn.ticketswap.com/static/images/placeholders/concert-3.jpg",
  },
]

export async function getEvents() {
  return events
}
