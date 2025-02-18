import type { Route } from "./+types"
import { Listing } from "@lib/components/listing"
import { sleep } from "@lib/utils"

export function meta() {
    return [
        { title: "Private Property" },
        { name: "description", content: "Welcome to Private Property" },
    ]
}

// eslint-disable-next-line react-refresh/only-export-components -- Required to fetch data on navigation
export async function clientLoader() {
    // We sleep to simulate fetching data from a server
    await sleep(1000)
    return (await import("@lib/data/index")).featuredListing
}

// HydrateFallback is rendered while the client loader is running
export function HydrateFallback() {
    return <div>Loading...</div>
}

export default function Index({ loaderData }: Route.ComponentProps) {
    const listing = loaderData
    return (
        <Listing listing={listing} />
    )
}
