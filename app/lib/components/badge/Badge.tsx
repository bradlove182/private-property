import { cn } from "@lib/utils"

export interface Props {
    children: React.ReactNode
    className?: string
}

export default function Badge({ children, className }: Props) {
    return (
        <span className={cn("leading-none text-nowrap font-semibold size-min rounded bg-neutral-200 px-2 py-1 text-xs", className)}>
            {children}
        </span>
    )
}
