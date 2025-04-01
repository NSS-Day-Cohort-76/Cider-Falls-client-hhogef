import { getGuests } from "./database.js"
// list all park guests.  

const guestsArray = getGuests()

export const guests = () => {
    let html = "<ul>"

    for (const guest of guests) {
        html += `<li
        data-type="guest"
        data-id="${guest.id}" 
        data-areaId="${guest.areaId}
        data-name="${guest.name}" 
        >${guest.name}</li>`
    }

    html += "</ul>"
    return html
}