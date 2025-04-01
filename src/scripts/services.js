import { getServices } from "./database.js"

const servicesArray = getServices();

export const services = () => {
    let servicesHTML = "Park Services:"

    servicesArray.forEach((service, i) => {
        servicesHTML += 
        `<p data-id="${service.id}"
        data-type="service"
        data-areaIn="${service.areasIn}"
                          class="services">
                          ${service.name}${i != servicesArray.length - 1 ? `,` : ``}
                          </p>
                          `
    })
    return servicesHTML += ''
}

                          //     servicesHTML += servicesArray.map(service => service.name).join(", ")     
                          //    servicesHTML += "</p>"       