export function sleep(duration = 300): Promise<never> {
    return new Promise(resolve => setTimeout(resolve, duration))
}