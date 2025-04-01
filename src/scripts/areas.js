import {getAreas} from database.js

let areasArray = getAreas()
//Iterate through service objects 
export const areas = () => {
 let areasHTML = "<ul>"

    for (const area of areasArray){
        areasHTML+= `<li data-type="areas" data-id="${area.id}">${area.titleName}</li>`
    }

    areasHTML += "</ul>"
    
    return areasHTML
}