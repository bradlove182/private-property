import type { PropertyListing } from "@lib/data"

export interface Props {
    listing: PropertyListing
}

export default function Listing({ listing }: Props) {
    return (
        <div>
            {listing.title}
        </div>
    )
}
