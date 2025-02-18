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
    price: number
    tags: string[]
    images: string[]
    agency: ListingAgency
    agent: ListingAgent
    type: "apartment" | "house"
    term: "day" | "month"
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
    price: 2995000,
    tags: ["HD Media", "Retirement"],
    images: ["/assets/images/Image-1.webp", "/assets/images/Image-2.webp", "/assets/images/Image-3.webp"],
    agency: {
        name: "ikhayaProp",
        logo: "/assets/agent/ikhayaProp.webp",
    },
    agent: {
        name: "Thato Sitole",
        profilePicture: "/assets/agent/thato-sitole.webp",
    },
    term: "day",
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
