import type { VariantProps } from "tailwind-variants"
import { tv } from "tailwind-variants"
import Badge from "./Badge"

const badgeVariants = tv({
    base: "leading-none text-nowrap font-semibold size-min rounded text-xs flex items-center",
    variants: {
        variant: {
            default: "bg-neutral-700 text-neutral-white",
            success: "bg-notification-green text-neutral-white",
            warning: "bg-notification-orange text-neutral-white",
            muted: "bg-muted text-[10px] text-neutral-800 font-normal",
        },
        size: {
            default: "px-2 py-1",
            sm: "px-1 py-0.5",
            icon: "h-9 w-9",
        },
    },
    defaultVariants: {
        variant: "default",
        size: "default",
    },
})

type BadgeVariant = VariantProps<typeof badgeVariants>["variant"]
type BadgeSize = VariantProps<typeof badgeVariants>["size"]

export {
    Badge,
    type BadgeSize,
    type BadgeVariant,
    badgeVariants,
}
