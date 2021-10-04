import {getTips} from '../database.js'

export const TipList = () => {
    const travelTip = getTips()
    let tipHtmlString = ''
    for (const tips of travelTip) {
        tipHtmlString += `<p>${tips.tip}</p>`
    }
    return tipHtmlString
}
