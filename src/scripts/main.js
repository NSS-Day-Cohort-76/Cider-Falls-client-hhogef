import{services} from "./services.js"
import{guests} from "./guests.js"
import{areas} from "./areas.js"
import { guestCountClick, servicesListedOnClick } from "./onClickEvents.js"

const mainContainer = document.getElementById("container")


const serviceHTML = services()
const guestsHTML = guests()
const areasHTML = areas()


const renderHTML = () => {
  return `
    <div id="services-list">
    <p>${serviceHTML}</p>
    </div>
    
    <div id="areas_related_amenities">
    <p class"areaSelector">${areasHTML}</p> 
    </div>
    
    <div id="guest">
    <h1>Current Park Guests</h1>
    <p>${guestsHTML}</p>
    </div>
  `
}
 mainContainer.innerHTML = renderHTML()

 guestCountClick()
 servicesListedOnClick()