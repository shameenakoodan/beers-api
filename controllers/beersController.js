//Array of objects
const beerArray = [
    {
      id: 24,
      name: "The End Of History",
      tagline: "The World's Strongest Beer.",
      first_brewed: "06/2011",
      description:
        "The End of History: The name derives from the famous work of philosopher Francis Fukuyama, this is to beer what democracy is to history. Complexity defined. Floral, grapefruit, caramel and cloves are intensified by boozy heat.",
      image_url: "https://images.punkapi.com/v2/24.png",
      abv: 55,
      ph: 4.4,
    },
    {
      id: 23,
      name: "Storm",
      tagline: "Islay Whisky Aged IPA.",
      first_brewed: "12/2007",
      description:
        "Dark and powerful Islay magic infuses this tropical sensation of an IPA. Using the original Punk IPA as a base, we boosted the ABV to 8% giving it some extra backbone to stand up to the peated smoke imported directly from Islay.",
      image_url: "https://images.punkapi.com/v2/23.png",
      abv: 8,
      ibu: 60,
      target_fg: 1010,
      target_og: 1082,
      ebc: 12,
      srm: 6,
      ph: 4.4,
    },
    {
      id: 22,
      name: "Devine Rebel (w/ Mikkeller)",
      tagline: "Oak-aged Barley Wine.",
      first_brewed: "12/2008",
      description:
        "Two of Europe's most experimental, boundary-pushing brewers, BrewDog and Mikkeller, combined forces to produce a rebellious beer that combined their respective talents and brewing skills. The 12.5% Barley Wine fermented well, and the champagne yeast drew it ever closer to 12.5%. The beer was brewed with a single hop variety and was going to be partially aged in oak casks.",
      image_url: "https://images.punkapi.com/v2/22.png",
      abv: 12.5,
      ibu: 100,
      target_fg: 1030,
      target_og: 1093,
      ebc: 36,
      srm: 18,
      ph: 4.4,
    },
    {
      "id": 21,
      "name": "Vice Bier",
      "tagline": "Hoppy Wheat Bier.",
      "first_brewed": "04/2013",
      "description": "Our take on the classic German Kristallweizen. A clear German wheat beer, layers of bubblegum and vanilla perfectly balanced with the American and New Zealand hops.",
      "image_url": "https://images.punkapi.com/v2/keg.png",
      "abv": 4.3,
      "ibu": 25,
      "target_fg": 1010,
      "target_og": 1043,
      "ebc": 30,
      "srm": 15,
      "ph": 4,
    },
    {
      "id": 20,
          "name": "Rabiator",
          "tagline": "Imperial Wheat Beer",
          "first_brewed": "03/2011",
          "description": "Imperial Wheat beer / Weizenbock brewed by a homesick German in leather trousers. Think banana bread, bubble gum and David Hasselhoff.",
          "image_url": "https://images.punkapi.com/v2/keg.png",
          "abv": 10.27,
          "ibu": 26,
          "target_fg": 1014,
          "target_og": 1092,
          "ebc": 24,
          "srm": 12,
          "ph": 4.4,
    }
  ];
  export const getBeerList = (req,res)=>{
    res.status(200).send({
        beers: beerArray,
      });
  }

  //Add a beer to this list
  export const addBeers=(req,res)=>{
    const newBeer = {
      id: req.body.id,
      name: req.body.name,
      tagline: req.body.tagline,
      first_brewed :req.body.first_brewed,
      description :req.body.description,
      image_url :req.body.image_url,
      abv: req.body.abv,
      ph:req.body.ph
    };
  
    beerArray.push(newBeer);
    //console.log(beerArray);
    res.status(201).send({
        message:"Beer Added"
    })
  }
