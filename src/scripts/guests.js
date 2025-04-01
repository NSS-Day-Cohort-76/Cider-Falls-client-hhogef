import { getGuests } from "./database.js"
// list all park guests.  

const guestsArray = getGuests()

export const guests = () => {
    let guestsHTML = "<ul>"

    for (const guest of guestsArray) {
        guestsHTML += `<li
        data-type="guest"
        data-id="${guest.id}" 
        data-areaId="${guest.areaId}
        data-name="${guest.name}" 
        >${guest.name}</li>`
    }

    guestsHTML += "</ul>"
    return guestsHTML
}