export interface Props {
    children: React.ReactNode
}

export default function Badge({ children }: Props) {
    return (
        <span>
            {children}
        </span>
    )
}
