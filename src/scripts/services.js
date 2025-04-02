import { getServices } from "./database.js"

const servicesArray = getServices();

export const services = () => {
    let servicesHTML = "<strong>Park Services:</strong>"

    servicesArray.forEach((service, i) => {
        servicesHTML += 
        `<p data-id="${service.id}"
        data-type="service"
        data-name="${service.name}"
        data-areaIn="${service.areasIn}"
                          class="services">
                          ${service.name}${i != servicesArray.length - 1 ? `,` : ``}
                          </p>
                          `
    })
    return servicesHTML += ''
}