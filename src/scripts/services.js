import { getServices } from "./database.js"

const servicesArray = getServices();

export const services = () => {
    let servicesHTML = "<ul>"

    for (const service of servicesArray) {
        servicesHTML += `<li data-id="${service.id}"
                          data-type="service"
                          data-areaIn="${service.areaIn}
                          >${service.name}

                          </li>`
    }
    
                        
    servicesHTML += "</ul>"

    return servicesHTML
}
