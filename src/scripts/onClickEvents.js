import { getGuests } from "./database.js"



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