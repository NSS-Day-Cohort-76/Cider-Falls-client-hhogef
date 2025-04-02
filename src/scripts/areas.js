import {getAreas, getServices} from "./database.js"

const serve = getServices()

let areasArray = getAreas()
//Iterate through service objects 
export const areas = () => {
 let areasHTML = `<div class="areas-container">`

    for (const area of areasArray){
      areasHTML+= `<div class="area-card" data-type="areas" data-name="${area.titleName}" data-id="${area.id}">`
      areasHTML += `<h1>${area.titleName}</h1>`
      serve.forEach(serve => { 
        if (serve.areasIn.includes(area.id)){
        areasHTML += `<p id="serviceArea">${serve.name}</p>`

      }
    }) 
    areasHTML +=`</div>`
  }
  areasHTML += `</div>`  
    return areasHTML
}