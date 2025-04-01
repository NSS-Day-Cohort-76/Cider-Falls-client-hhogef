import {getAreas, getServices} from "./database.js"

const serve = getServices()

let areasArray = getAreas()
//Iterate through service objects 
export const areas = () => {
 let areasHTML = ""

    for (const area of areasArray){
      areasHTML += `<h1 data-type="areas" data-id="${area.id}">${area.titleName}</h1>`
      serve.forEach(serve => { 
        if (serve.areasIn[0] === area.id){
        return `<p>${serve.name}</p>`

      }
    }) 
  }
    return areasHTML
}