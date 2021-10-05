const database = {
    fish: [
        {
            name: "Bart",
            species: "Goldfish",
            location: "Park Pond",
            diet: "Crustaceans",
            length: 3,
            image: "https://2nhjakvchz41k6pz81rhzd4f-wpengine.netdna-ssl.com/wp-content/uploads/2020/10/gold-fish-1.jpg"
        },
        {
            name: "Ralph",
            species: "Mandarinfish",
            location: "Pacific Ocean",
            diet: "Gastropods",
            length: 3,
            image:"https://www.baliocean.com/wp-content/uploads/2018/07/plugon-mandarin-dragonet-fish.jpg"   
        },
        {
            name: "Petunia",
            species: "Bluespotted Ribbontail Ray",
            location: "East African Coast",
            diet: "Crustaceans",
            length: 13,
            image:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Taeniura_lymma2a.jpg/1280px-Taeniura_lymma2a.jpg"   
        },
        {
            name: "Carl",
            species: "Clown Triggerfish",
            location: "Indian Ocean",
            diet: "Molluscs",
            length: 20,
            image:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Balistoides_conspicillum_2607.jpg/1024px-Balistoides_conspicillum_2607.jpg"   
        },
        {
            name: "Linda",
            species: "Red Sea Sailfin Tang",
            location: "Red Sea",
            diet: "Algae",
            length: 16,
            image:"https://i.pinimg.com/736x/7a/33/d6/7a33d691cde517fc2ac787497f1b56af--sea-world-red-sea.jpg"
        }
    ],
    
    tips: [
        {tip: "For added cushion, pack wetsuits around regulators and other sensitive equipment!"},
        {tip: "Don't forget to pack a few save-a-dive tools, like a crescent wrench and Allen keys!"},
        {tip: "If you want to join the Scuba Squad, you've got to be smart!"}
    ],

    location: [
        {
            name: "Great Barrier Reef",
            country: "Australia",
            example1: "Moorish Idol",
            example2: "Blackback Butterflyfish",
            example3: "Barramundi Cod",
            imageSrc: "https://api.time.com/wp-content/uploads/2021/07/great-barrier-reef.jpg?w=824&quality=70",
            imageAlt: "Aerial view of Great Barrier Reef"
        },
        {
            name: "Caribbean Sea",
            country: "Grand Cayman",
            example1: "Horse-Eye Jack Fish",
            example2: "Queen Angelfish",
            example3: "Silver Side Fish",
            imageSrc: "https://t3.ftcdn.net/jpg/02/43/44/42/360_F_243444206_slsYKmANDb4CbGLpYuDCk1LnfX7x9Plr.jpg",
            imageAlt: "Aerial view of Grand Cayman"
        },
        {
            name: "Galapagos Islands",
            country: "Ecuador",
            example1: "Sergean Major",
            example2: "King Angelfish",
            example3: "Marble Ray",
            imageSrc: "https://static.onecms.io/wp-content/uploads/sites/28/2019/12/galapagos-islands-ecuador-GALAPA1104.jpg",
            imageAlt: "Aerial view of Galapagos Islands"
        }
    ]
}

export const getFish = () => {
    return database.fish.map(fish => ({...fish}))
}

export const getTips = () => {
    return database.tips.map(tips => ({...tips}))
}

export const getLocations = () => {
    return database.location.map(location => ({...location}))
}

// CREATE NEW FISH ARRAYS BASED ON HOLY CALCULATION
export const mostHolyFish = () => {
    // 3, 6, 9, 12, etc... fish
    const holyFish = []

    for (const fish of database.fish) {
        if (fish.length % 3 === 0) {
            holyFish.push(fish)
        }
    }
    return holyFish
}

export const soldierFish = () => {
    // 5, 10, 15, 20, 25, etc... fish
    const soldiers = []
    for (const fish of database.fish) {
         if (fish.length % 5 === 0 && fish.length % 3 != 0) {
            soldiers.push(fish)
         }
     }
    return soldiers
}

export const nonHolyFish = () => {
    // Any fish not a multiple of 3 or 5
    const regularFish = []
        for (const fish of database.fish) {
            if (fish.length % 3 != 0 && fish.length % 5 != 0) {
                regularFish.push(fish)
            }
        }
    return regularFish
}
