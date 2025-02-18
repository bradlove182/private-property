import type { PropertyListing } from "@lib/data"
import { Badge } from "@lib/components/badge"

export interface Props {
    listing: PropertyListing
}

const formatter = new Intl.NumberFormat("en-ZA", {
    style: "currency",
    currency: "ZAR",
    useGrouping: true,
    maximumFractionDigits: 0,
})

const formatPrice = (price: number) => formatter.format(price).replaceAll(",", " ")

export default function Listing({ listing }: Props) {
    const {
        images,
        agency,
        agent,
        isReduced,
        tags,
        price,
        term,
        isPromoted,
        bedrooms,
        type,
        area,
        address,
    } = listing

    return (
        <div className="rounded overflow-hidden bg-neutral-white shadow-2xl">
            <div className="flex p-2 bg-brand-agency justify-between items-center h-[60px]">
                <img src={agency.logo} className="size-full max-w-[186px]" />
                <div className="flex gap-4">
                    <span className="font-semibold text-sm hidden sm:block text-neutral-900">{agent.name}</span>
                    <img
                        className="rounded-full border border-white size-16 -mb-10 -mt-2 shadow z-10"
                        src={agent.profilePicture}
                    />
                </div>
            </div>
            <div className="grid grid-rows-[2fr_1fr] grid-cols-1 sm:grid-cols-[2fr_1fr] sm:grid-rows-1 gap-px relative">
                <div className="grid grid-cols-1 grid-rows-1">
                    {
                        isReduced && (
                            <Badge className="col-start-1 row-start-1 m-2 z-10">Reduced</Badge>
                        )
                    }
                    <div className="col-start-1 row-start-1">
                        <img src={images[0]} alt="Image 1" />
                    </div>
                    <div className="col-start-1 row-start-1 self-end items-center size-min m-2 gap-2 flex z-10">
                        {
                            tags.map(tag => (
                                <Badge key={tag}>
                                    {tag}
                                </Badge>
                            ))
                        }
                    </div>
                </div>
                <div className="grid gap-px grid-cols-2 sm:grid-cols-1 sm:grid-rows-2 h-fit">
                    <img src={images[1]} alt="Image 2" />
                    <img src={images[2]} alt="Image 3" />
                </div>
            </div>
            <div className="flex p-4 pt-3 gap-6 items-center">
                <div>
                    <h4 className="font-bold text-2xl text-nowrap">
                        {formatPrice(price)}
                        <span className="pl-1 text-xs">{`per ${term}`}</span>
                    </h4>
                    {
                        isPromoted && (
                            <Badge>Promoted</Badge>
                        )
                    }
                </div>
                <div>
                    <h3 className="capitalize text-sm">
                        {`${bedrooms} Bedroom ${type} in `}
                        <strong>{area}</strong>
                        <span className="inline-block align-middle h-4 mx-2 w-px bg-neutral-400 border-0 appearance-none"></span>
                        <span>{address}</span>
                    </h3>
                </div>
            </div>
        </div>
    )
}
