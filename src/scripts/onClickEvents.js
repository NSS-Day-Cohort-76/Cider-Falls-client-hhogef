import { getAreas, getGuests, getServices } from "./database.js"



export const guestCountClick = () => {
  const guestCount = getGuests()
  document.addEventListener(
    "click",
    (theEvent) => {
      const theTarget = theEvent.target
      if (theTarget.dataset.type === "areas") {
        let count = 0
        for (const guest of guestCount) {
          if (guest.areaId === parseInt(theTarget.dataset.id)) {
            count++
          }
        }
        window.alert(`There are ${count} guests in this area`)
      }
    }
  )
}

export const servicesListedOnClick = () => {
    const servicesListed = getServices()
    const areasList = getAreas()
    document.addEventListener(
        "click",
        (theClickEvent) => {
            
            const areaClicked = theClickEvent.target

            if (areaClicked.dataset.type === "service") {

                let serviceAreas = [];

                const areaIdArray = areaClicked.dataset.areain.split(',')

                for (let areaId of areaIdArray) {
                    console.log(areasList.find(area => area.id === parseInt(areaId)).titleName)
                    const areaName = areasList.find(area => area.id === parseInt(areaId)).titleName
                    serviceAreas.push(areaName)
                

                     }
                
                
                
                if (serviceAreas.length > 0) {
                    console.log(serviceAreas)
                    const areaNames = serviceAreas.join(", ")
                    window.alert(`${areaClicked.dataset.name} is available in ${areaNames}`)
                    
                }
            }

            
        })
    
}
                
                













//                 const matchingServices = servicesListed.filter(service => service.name === areaClicked.innerText)

//                 const areas = matchingServices.map(service => service.area).join(", ")

//                 const matchingAreaName = matchingServices.forEach( service => {return service.name})

//                 window.alert(`${matchingAreaName} is available in ${areas}`)
            
//             }
//         }
//     )
// }