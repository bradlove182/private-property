import type { PropertyListing } from "@lib/data"
import { Badge } from "@lib/components/badge"

export interface Props {
    listing: PropertyListing
}

export default function Listing({ listing }: Props) {
    const { images, agency, agent, isReduced, tags } = listing

    return (
        <div className="rounded overflow-hidden bg-neutral-white max-w-[768px]">
            <div className="flex p-2 bg-brand-agency justify-between items-center h-[60px]">
                <img src={agency.logo} className="size-full max-w-[186px]" />
                <div className="flex relative">
                    <span className="font-semibold text-sm pr-22">{agent.name}</span>
                    <img className="rounded-full border right-2 -top-2 border-white size-16 absolute z-10" src={agent.profilePicture} />
                </div>
            </div>
            <div className="grid grid-cols-[2fr_1fr] gap-px relative">
                {isReduced && (
                    <div className="absolute top-0 left-0 p-2">
                        <Badge>Reduced</Badge>
                    </div>
                )}
                <img src={images[0]} />
                <div className="grid grid-rows-2 gap-px">
                    <img src={images[1]} />
                    <img src={images[2]} />
                </div>
                <div className="absolute bottom-0 left-0 p-2 gap-2 flex items-center">
                    {
                        tags.map(tag => (
                            <Badge key={tag}>
                                {tag}
                            </Badge>
                        ))
                    }
                </div>
            </div>
            <div></div>
        </div>
    )
}
