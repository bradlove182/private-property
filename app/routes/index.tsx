import { Listing } from "@lib/components/listing"
import type { Route } from "./+types";
import { sleep } from "@lib/utils";

export function meta() {
    return [
        { title: "Private Property" },
        { name: "description", content: "Welcome to Private Property" },
    ]
}

export async function clientLoader() {
    // We sleep to simulate fetching data from a server
    await sleep(1000)
    return (await import("@lib/data/index")).featuredListing;
  }

// HydrateFallback is rendered while the client loader is running
export function HydrateFallback() {
    return <div>Loading...</div>;
  }

export default function Index({ loaderData }: Route.ComponentProps) {
    const listing = loaderData;
    return (
        <div>
            <Listing listing={listing} />
        </div>
    )
}
