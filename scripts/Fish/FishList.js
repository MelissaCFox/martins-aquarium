import {getFish} from '../database.js'
import {mostHolyFish} from '../database.js'
import {soldierFish} from '../database.js'
import {nonHolyFish} from '../database.js'


// ORIGINAL FISH LIST GENERATOR
// export const FishList = () => {
//     const fishes = getFish()
//     let htmlString = '<article class ="fishes">'
//     for (const fish of fishes) {
//         htmlString += `<section class="fish">
//         <div><img  class="fish-image image--card" src="${fish.image}" /></div>
//             <div class="fish-info">
//                 <div class="fish-name">Name: ${fish.name}</div>
//                 <div class="fish-species">Species: ${fish.species}</div>
//                 <div class="fish-length">Length (inches): ${fish.length}</div>
//                 <div class="fish-location">Location: ${fish.location}</div>
//                 <div class="fish-diet">Diet: ${fish.diet}</div>
//             </div>
//         </section>
//         `
//     }
//     htmlString += `</article>`
//     return htmlString
// }


// GENERATE ORDERED FISH LIST BASED ON HOLY SCALE
export const FishList = () => {
    const fishes = getFish();
    const holyFish = mostHolyFish ();
    const soldiers = soldierFish ();
    const nonHoly = nonHolyFish ();

    let htmlString = '<article class ="fishes">'

    for (const fish of holyFish) {
        htmlString += `<section class="fish">
        <div><img  class="fish-image image--card" src="${fish.image}" /></div>
            <div class="fish-info">
                <div class="fish-name">Name: ${fish.name}</div>
                <div class="fish-species">Species: ${fish.species}</div>
                <div class="fish-length">Length (inches): ${fish.length}</div>
                <div class="fish-location">Location: ${fish.location}</div>
                <div class="fish-diet">Diet: ${fish.diet}</div>
            </div>
        </section>
        `
    }
    for (const fish of soldiers) {
        htmlString += `<section class="fish">
        <div><img  class="fish-image image--card" src="${fish.image}" /></div>
            <div class="fish-info">
                <div class="fish-name">Name: ${fish.name}</div>
                <div class="fish-species">Species: ${fish.species}</div>
                <div class="fish-length">Length (inches): ${fish.length}</div>
                <div class="fish-location">Location: ${fish.location}</div>
                <div class="fish-diet">Diet: ${fish.diet}</div>
            </div>
        </section>
        `
    }
    for (const fish of nonHoly) {
        htmlString += `<section class="fish">
        <div><img  class="fish-image image--card" src="${fish.image}" /></div>
            <div class="fish-info">
                <div class="fish-name">Name: ${fish.name}</div>
                <div class="fish-species">Species: ${fish.species}</div>
                <div class="fish-length">Length (inches): ${fish.length}</div>
                <div class="fish-location">Location: ${fish.location}</div>
                <div class="fish-diet">Diet: ${fish.diet}</div>
            </div>
        </section>
        `
    }
    htmlString += `</article>`
    return htmlString
}

