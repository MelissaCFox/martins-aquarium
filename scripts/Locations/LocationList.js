
import {getLocations} from '../database.js'


export const LocationsList = () => {
    const locations = getLocations()
    let locationHTML = '<section class ="location">'
        for (const location of locations) {
            locationHTML += 
            `<div class="location-info">
                    <h3>${location.name}</h3>
                    <p class="country">${location.country}</p>
                    <p class="known-species">Species Found Here:</p>
                        <ul class="example-fish">
                            <li>${location.example1}</li>
                            <li>${location.example2}</li>
                            <li>${location.example3}</li>
                        </ul>
                </div>
                <div class="location-photo">
                    <img class="location-image" alt="${location.imageAlt}" src="${location.imageSrc}">
                </div>`
        }
        locationHTML += `</section>`
        return locationHTML
}