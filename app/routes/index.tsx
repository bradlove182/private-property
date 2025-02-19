import type { Route } from "./+types"
import { Listing } from "@lib/components/listing"

export function meta() {
    return [
        { title: "Private Property" },
        { name: "description", content: "Welcome to Private Property" },
    ]
}

export async function loader() {
    return (await import("@lib/data/index")).featuredListing
}

export default function Index({ loaderData }: Route.ComponentProps) {
    const listing = loaderData
    return <Listing listing={listing} />
}
