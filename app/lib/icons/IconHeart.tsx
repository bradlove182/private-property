import type { IconProps } from "."

export default function IconHeart({ size = "20", ...rest }: IconProps) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 0 24 24" {...rest}>
            <path fillRule="evenodd" d="M9.507 20.612c.73.512 1.366.917 1.726 1.128l.767.46.774-.464c.353-.207.988-.612 1.719-1.124a33.424 33.424 0 0 0 3.374-2.691c3.077-2.816 4.933-5.707 4.933-8.602C22.8 5.833 20.03 3 16.629 3a6.062 6.062 0 0 0-3.762 1.312 6.26 6.26 0 0 0-.867.831 6.26 6.26 0 0 0-.867-.831A6.062 6.062 0 0 0 7.37 3C3.97 3 1.2 5.833 1.2 9.32c0 2.894 1.856 5.785 4.933 8.6a33.432 33.432 0 0 0 3.374 2.692Zm4.297-.983a26.91 26.91 0 0 1-1.637 1.072l-.167.1-.15-.09-.01-.006c-.325-.19-.932-.577-1.644-1.076a32.224 32.224 0 0 1-3.253-2.594C3.94 14.29 2.4 11.7 2.4 9.32c0-2.85 2.258-5.12 4.971-5.12 1.442 0 2.785.64 3.72 1.726L12 6.983l.91-1.057A4.902 4.902 0 0 1 16.628 4.2c2.713 0 4.971 2.27 4.971 5.12 0 2.379-1.54 4.969-4.543 7.715a32.225 32.225 0 0 1-3.253 2.594Z" clipRule="evenodd" />
        </svg>
    )
}
