import{services} from "./services.js"
import{guests} from "./guests.js"
import{areas} from "./areas.js"
const mainContainer = document.getElementById("container")

const serviceHTML = services()
const guestsHTML = guests()
const areasHTML = areas()
const renderHTML = () => {
  return `
    <h1 id="services_header">Cider Falls</h1>
    <div id="services-list">${serviceHTML}</div>
    <div id="areas_related_amenities">
    <p>${areasHTML}</p> 
    </div>
    <div id="guest">
    <h1>Current Park Guest</h1>
    <p>${guestsHTML}</p>
    </div>
  `
}
 mainContainer.innerHTML = renderHTML()



// import{services} from "./services.js"
// import{guests} from "./guests.js"
// import{areas} from "./areas.js"

// const mainContainer = document.querySelector("#container")


// const serviceHTML = services()
// const guestsHTML = guests()
// const areasHTML = areas()

// export const renderHTML = () => {
//   return `
//     <h1 id="services_header">Services provided</h1>
//     <div id="services-list">${serviceHTML}</div>

//     <div id="areas_related_amenities">
//     <h1>${areasHTML}</h1> 
//     <h2>Amenities</h2>
//     </div>
//     <div id="guest">
//     <h1>Current Park Guest</h1>
//     <p>${guestsHTML}</p>
//     </div>
//   `
// }

// mainContainer.innerHTML = renderHTML()