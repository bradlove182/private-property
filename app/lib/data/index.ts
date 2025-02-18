export interface ListingAgent {
    name: string
    profilePicture: string
}

export interface ListingAgency {
    name: string
    logo: string
}

export interface PropertyListing {
    id: number
    title: string
    price: number
    tags: string[]
    images: string[]
    agency: ListingAgency
    agent: ListingAgent
    type: "apartment" | "house"
    bathrooms: number
    bedrooms: number
    garages: number
    erfSize: number
    propertySize: number
    address: string
    area: string
    isReduced: boolean
    isPromoted: boolean

}

export const featuredListing: PropertyListing = {
    id: 1,
    title: "3 Bedroom Apartment in Durbanville",
    price: 2995000,
    tags: ["HD Media", "Retirement"],
    images: [],
    agency: {
        name: "ikhayaProp",
        logo: "",
    },
    agent: {
        name: "Thato Sitole",
        profilePicture: "",
    },
    type: "apartment",
    erfSize: 880,
    propertySize: 320,
    address: "12 The Avenue, Annie-Marie Road",
    bathrooms: 2,
    bedrooms: 3,
    garages: 2,
    area: "Durbanville",
    isReduced: true,
    isPromoted: true,
} as const
