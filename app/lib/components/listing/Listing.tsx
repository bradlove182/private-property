import type { PropertyListing } from "@lib/data"
import type { IconProps } from "@lib/icons"
import { Badge } from "@lib/components/badge"
import { IconBathroom, IconBedroom, IconCar, IconErfSize, IconHeart, IconPropertySize } from "@lib/icons"
import { cn } from "@lib/utils"
import { useCallback, useEffect, useState } from "react"

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

const FAVOURITES_STORAGE_KEY = "local:favourites"

export default function Listing({ listing }: Props) {
    const {
        id,
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
        erfSize,
        bathrooms,
        garages,
        propertySize,
    } = listing

    const [favourites, setFavourites] = useState<string[]>([])

    const propertyDetails: { label: string, Icon: React.ComponentType<IconProps> }[] = [
        {
            label: `${bedrooms}`,
            Icon: IconBedroom,
        },
        {
            label: `${bathrooms}`,
            Icon: IconBathroom,
        },
        {
            label: `${garages}`,
            Icon: IconCar,
        },
        {
            label: `${erfSize} m²`,
            Icon: IconErfSize,
        },
        {
            label: `${propertySize} m²`,
            Icon: IconPropertySize,
        },
    ]

    const handleOnClickFavourites = useCallback((id: string) => () => {
        setFavourites((state) => {
            if (state.includes(id)) {
                const updated = state.filter(item => item !== id)
                localStorage.setItem(FAVOURITES_STORAGE_KEY, JSON.stringify(updated))

                return updated
            }

            const updated = [...state, id]
            localStorage.setItem(FAVOURITES_STORAGE_KEY, JSON.stringify(updated))

            return updated
        })
    }, [])

    useEffect(() => {
        const stored = localStorage.getItem(FAVOURITES_STORAGE_KEY)

        if (stored) {
            setFavourites(JSON.parse(stored))
        }
    }, [])

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
                            <Badge variant="success" className="col-start-1 row-start-1 m-2 z-10">Reduced</Badge>
                        )
                    }
                    <div className="col-start-1 row-start-1">
                        <img className="size-full" src={images[0]} alt="Image 1" loading="eager" />
                    </div>
                    <div className="col-start-1 row-start-1 self-end items-center size-min m-2 gap-1 flex z-10">
                        {
                            tags.map((tag, index) => (
                                <Badge key={tag} variant={index === 0 ? "warning" : "default"}>
                                    {tag}
                                </Badge>
                            ))
                        }
                    </div>
                </div>
                <div className="grid gap-px grid-cols-2 sm:grid-cols-1 sm:grid-rows-2 h-fit">
                    <img className="size-full" src={images[1]} alt="Image 2" />
                    <img className="size-full" src={images[2]} alt="Image 3" />
                </div>
            </div>
            <div className="flex p-4 pt-3 gap-6">
                <div className="flex flex-col justify-between">
                    <h4 className="font-bold text-2xl text-nowrap">
                        {formatPrice(price)}
                        <span className="pl-1 text-xs">{`per ${term}`}</span>
                    </h4>
                    {
                        isPromoted && (
                            <Badge variant="muted" size="sm">
                                Promoted
                            </Badge>
                        )
                    }
                </div>
                <div className="flex flex-col gap-3">
                    <h3 className="capitalize text-sm">
                        {`${bedrooms} Bedroom ${type} in `}
                        <strong>{area}</strong>
                        <span role="presentation" className="inline-block align-middle h-4 mx-2 w-px bg-neutral-400 border-0"></span>
                        <span>{address}</span>
                    </h3>
                    <div className="flex items-center gap-2 justify-between">
                        <div className="flex gap-4 items-center">
                            {
                                propertyDetails.map(({ label, Icon }, index) => (
                                    // eslint-disable-next-line react/no-array-index-key -- The order does not change currently so using index is fine
                                    <span key={`${label}-${index}`} className="flex items-center gap-1.5 font-bold text-sm">
                                        <Icon className="text-neutral-500" size="24" />
                                        {label}
                                    </span>
                                ))
                            }
                        </div>
                        <button
                            onClick={handleOnClickFavourites(id)}
                            type="button"
                            className={cn(
                                "hover:cursor-pointer hover:scale-110 active:scale-110 transition-transform text-brand-secondary",
                                favourites.includes(id) && "text-red-500",
                            )}
                        >
                            <IconHeart size="24" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
