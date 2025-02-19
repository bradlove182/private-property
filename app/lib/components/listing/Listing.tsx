import type { PropertyListing } from "@lib/data"
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
        <div id={`listing-${id}`} className="w-full max-w-[768px]">
            {
                isPromoted && (
                    <Badge variant="muted" size="sm" className="block md:hidden mb-4">
                        Promoted
                    </Badge>
                )
            }
            <div className="rounded overflow-hidden bg-neutral-white shadow-2xl">
                <div className="flex p-2 bg-brand-agency justify-between items-center h-[60px]">
                    <img src={agency.logo} alt={agency.name} className="object-contain max-w-[186px] size-full" />
                    <div className="flex gap-4">
                        <span className="font-semibold text-sm hidden sm:block text-neutral-900">{agent.name}</span>
                        <img
                            className="rounded-full border border-white size-16 -mb-10 -mt-2 shadow z-10 min-h-16 min-w-16"
                            src={agent.profilePicture}
                            alt={agent.name}
                        />
                    </div>
                </div>
                <div className="grid grid-rows-[2fr_1fr] grid-cols-1 sm:grid-cols-[2fr_1fr] sm:grid-rows-1 gap-px relative">
                    <div className="grid grid-cols-1 grid-rows-1">
                        {
                            isReduced && (
                                <Badge variant="success" className="col-start-1 row-start-1 m-2 z-10">
                                    Reduced
                                </Badge>
                            )
                        }
                        <div className="col-start-1 row-start-1">
                            <img className="size-full aspect-[437/324] object-cover" src={images[0]} alt="Image 1" loading="eager" />
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
                        <img className="size-full aspect-[216/161.5] object-cover" src={images[1]} alt="Image 2" loading="lazy" />
                        <img className="size-full aspect-[216/161.5] object-cover" src={images[2]} alt="Image 3" loading="lazy" />
                    </div>
                </div>
                <div className="flex p-4 pt-3 gap-2 md:gap-6 flex-col md:flex-row">
                    <div className="flex flex-col justify-between">
                        <h4 className="font-bold text-2xl text-nowrap">
                            {formatPrice(price)}
                            <span className="pl-1 text-xs">{`per ${term}`}</span>
                        </h4>
                        {
                            isPromoted && (
                                <Badge variant="muted" size="sm" className="hidden md:block">
                                    Promoted
                                </Badge>
                            )
                        }
                    </div>
                    <div className="flex flex-col gap-2 md:gap-3 w-full">
                        <h3 className="capitalize text-sm">
                            {`${bedrooms} Bedroom ${type} in `}
                            <strong>{area}</strong>
                            <span role="presentation" className="hidden md:inline-block align-middle h-4 mx-2 w-px bg-neutral-400 border-0"></span>
                            <span className="block md:inline">{address}</span>
                        </h3>
                        <div className="flex items-end md:items-center gap-2 justify-between">
                            <div className="flex gap-4 items-center flex-wrap">
                                <span className="flex items-center gap-1.5 font-bold text-sm">
                                    <IconBedroom className="text-neutral-500" size="24" />
                                    {bedrooms}
                                </span>
                                <span className="flex items-center gap-1.5 font-bold text-sm">
                                    <IconBathroom className="text-neutral-500" size="24" />
                                    {bathrooms}
                                </span>
                                <span className="flex items-center gap-1.5 font-bold text-sm">
                                    <IconCar className="text-neutral-500" size="24" />
                                    {garages}
                                </span>
                                <span className="hidden md:flex items-center gap-1.5 font-bold text-sm ">
                                    <IconErfSize className="text-neutral-500" size="24" />
                                    {`${erfSize} m²`}
                                </span>
                                <span className="hidden md:flex items-center gap-1.5 font-bold text-sm">
                                    <IconPropertySize className="text-neutral-500" size="24" />
                                    {`${propertySize} m²`}
                                </span>
                                <div className="flex gap-2 md:hidden">
                                    <Badge className="gap-1" variant="highlight">
                                        <span className="font-normal text-neutral-600">Erf</span>
                                        <span>{`${erfSize} m²`}</span>
                                    </Badge>
                                    <Badge className="gap-1" variant="highlight">
                                        <span className="font-normal text-neutral-600">Floor</span>
                                        <span>{`${propertySize} m²`}</span>
                                    </Badge>
                                </div>
                            </div>
                            <button
                                aria-label="Favourite Listing Button"
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
        </div>
    )
}
