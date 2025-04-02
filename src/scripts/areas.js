import {getAreas, getServices} from "./database.js"
import { services } from "./services.js"

const serve = getServices()

let areasArray = getAreas()
//Iterate through service objects 
export const areas = () => {
 let areasHTML = ""

    for (const area of areasArray){
      areasHTML += `<h1 data-type="areas" data-name="${area.titleName}" data-id="${area.id}">${area.titleName}</h1>`
      serve.forEach(serve => { 
        if (serve.areasIn.includes(area.id)){
        areasHTML += `<p>${serve.name}</p>`

      }
    }) 
  }
    return areasHTML
}