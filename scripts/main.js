import {getFish} from './database.js'

const allFish = getFish()

for (const fish of allFish) {
    console.log(fish)
}


import {FishList} from './Fish/FishList.js'

let parentHTMLElement = document.querySelector(".fish-list")

parentHTMLElement.innerHTML = FishList()


import {TipList} from './Tips/TipList.js'
let startHTMLElement = document.querySelector(".travel-tips")
startHTMLElement.innerHTML = TipList()