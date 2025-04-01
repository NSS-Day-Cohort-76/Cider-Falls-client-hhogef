import { services } from "./services.js";

const database = {
    guests: [{
        id: 1,
        name: "Tom Selleck",
        areaId: 1
    }, {
        id: 2,
        name: "Lucinda Highgrass",
        areaId: 2
    }, {
        id: 3,
        name: "Evelyn Harper",
        areaId: 3
    }, {
        id: 4,
        name: "James McAllister",
        areaId: 5
    }, {
        id: 5,
        name: "Sophia Bennett",
        areaId: 4
    }, {
        id: 6,
        name: "Liam Carter",
        areaId: 6
    }, {
        id: 7,
        name: "Olivia Martinez",
        areaId: 2
    }, {
        id: 8,
        name: "Noah Johnson",
        areaId: 1
    }, {
        id: 9,
        name: "Emma Wilson",
        areaId: 3
    }, {
        id: 10,
        name: "Mason Brown",
        areaId: 4
    }, {
        id: 11,
        name: "Isabella Davis",
        areaId: 6
    }, {
        id: 12,
        name: "Lucas Garcia",
        areaId: 5
    }, {
        id: 13,
        name: "Mia Rodriguez",
        areaId: 1
    }, {
        id: 14,
        name: "Ethan Martinez",
        areaId: 2
    }, {
        id: 15,
        name: "Charlotte Hernandez",
        areaId: 3
    }, {
        id: 16,
        name: "Aiden Lopez",
        areaId: 4
    }, {
        id: 17,
        name: "Amelia Gonzalez",
        areaId: 5
    }, {
        id: 18,
        name: "Logan Perez",
        areaId: 6
    }, {
        id: 19,
        name: "Harper Sanchez",
        areaId: 1
    }, {
        id: 20,
        name: "Elijah Ramirez",
        areaId: 2
    }, {
        id: 21,
        name: "Grace Thompson",
        areaId: 3
    }, {
        id: 22,
        name: "Henry Walker",
        areaId: 4
    }, {
        id: 23,
        name: "Lily Scott",
        areaId: 5
    }, {
        id: 24,
        name: "Jack White",
        areaId: 6
    }, {
        id: 25,
        name: "Zoe Adams",
        areaId: 1
    }],


    areas: [{
        id: 1,
        titleName: "Lodge",
    }, {
        id: 2,
        titleName: "Lost Wolf Hiking Trail",
    }, {
        id: 3,
        titleName: "Chamfort River",
    }, {
        id: 4,
        titleName: "Gander River",
    }, {
        id: 5,
        titleName: "Campgrounds",
    }, {
        id: 6,
        titleName: "Pine Bluffs Trails",
 }],


    services: [{
        id: 1,
        name: "Hiking",
        areasIn: [2,4,6]
    }, {
        id: 2,
        name: "Rafting",
        areasIn: [3]
    }, {
        id: 3,
        name: "Canoeing",
        areasIn: [3]
    }, {
        id: 4,
        name: "Fishing",
        areasIn: [3, 4]
    }, {
        id: 5,
        name: "Picnicking",
        areasIn: [1, 2, 6]
    }, {
        id: 6,
        name: "Rock Climbing",
        areasIn: [2]
    }, {
        id: 7,
        name: "Lodging",
        areasIn: [1, 5]
    }, {
        id: 8,
        name: "Dining",
        areasIn: [1,6]
    }, {
        id: 9,
        name: "Information",
        areasIn: [1, 5]
    }, {
        id: 10,
        name: "Parking",
        areasIn: [1, 5]
    }, {
        id: 11,
        name: "Natural Preserve",
        areasIn: [4]
    }, {
        id: 12,
        name: "Office Park",
        areasIn: [5]
    }, {
        id: 13,
        name: "Play Area",
        areasIn: [5]
    }, {
        id: 14,
        name: "Zip Lines",
        areasIn: [6]
    }]
}
export const getGuests = () => {
    return structuredClone(database.guests);
}
export const getAreas = () => {
    return structuredClone(database.areas);
}
export const getServices = () => {
    return structuredClone(database.services);
}