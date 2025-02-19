import type { IconProps } from "."

export default function IconCar({ size = "20", ...rest }: IconProps) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 0 24 24" {...rest}>
            <path d="M8.4 13.5a.6.6 0 0 1 .6-.6h6a.6.6 0 1 1 0 1.2H9a.6.6 0 0 1-.6-.6Zm-4 0a.6.6 0 0 1 .6-.6h1.5a.6.6 0 1 1 0 1.2H5a.6.6 0 0 1-.6-.6Zm13.1-.6a.6.6 0 1 0 0 1.2H19a.6.6 0 1 0 0-1.2h-1.5Z" />
            <path fillRule="evenodd" d="m18.595 5.255 1.91 3.5 1.35-.337a.6.6 0 1 1 .29 1.164l-1.052.263.521 1.042a4.6 4.6 0 0 1 .486 2.057V19.5a1.6 1.6 0 0 1-1.6 1.6h-1a1.6 1.6 0 0 1-1.6-1.6v-.4H6.1v.4a1.6 1.6 0 0 1-1.6 1.6h-1a1.6 1.6 0 0 1-1.6-1.6v-6.556a4.6 4.6 0 0 1 .486-2.057l.52-1.042-1.052-.263a.6.6 0 1 1 .292-1.164l1.35.337 1.909-3.5A2.6 2.6 0 0 1 7.687 3.9h8.626a2.6 2.6 0 0 1 2.282 1.355ZM6.458 5.83a1.4 1.4 0 0 1 1.23-.73h8.625a1.4 1.4 0 0 1 1.229.73l1.674 3.07H4.784l1.675-3.07Zm-2.33 4.27-.096.178-.573 1.146a3.4 3.4 0 0 0-.359 1.52V16.5a1.4 1.4 0 0 0 1.4 1.4h2.24l1.401-1.494a1.6 1.6 0 0 1 1.167-.506h5.384a1.6 1.6 0 0 1 1.167.506l1.4 1.494H19.5a1.4 1.4 0 0 0 1.4-1.4v-3.556c0-.528-.123-1.048-.359-1.52l-.573-1.146-.097-.178H4.13Zm4.888 7.126-.631.674h7.23l-.631-.674a.4.4 0 0 0-.292-.126H9.308a.4.4 0 0 0-.292.126ZM19.5 19.1c.515 0 .996-.15 1.4-.409v.809a.4.4 0 0 1-.4.4h-1a.4.4 0 0 1-.4-.4v-.4h.4Zm-16.4-.41c.404.259.885.409 1.4.409h.4v.4a.4.4 0 0 1-.4.4h-1a.4.4 0 0 1-.4-.4v-.809Z" clipRule="evenodd" />
        </svg>
    )
}
