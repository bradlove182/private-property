import type { BadgeSize, BadgeVariant } from "."
import { cn } from "@lib/utils"
import { badgeVariants } from "."

export interface Props extends React.HTMLAttributes<HTMLSpanElement> {
    children: React.ReactNode
    className?: string
    variant?: BadgeVariant
    size?: BadgeSize
}

export default function Badge({
    children,
    className,
    variant = "default",
    size = "default",
    ...rest
}: Props) {
    return (
        <span
            className={cn(badgeVariants({ variant, size }), className)}
            {...rest}
        >
            {children}
        </span>
    )
}
