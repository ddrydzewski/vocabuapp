import { useEffect, useState } from "react";

export const useKey = (key: string) => {
    const [pressed, setPressed] = useState(false);

    const match = (event: { key: string }) => key.toLowerCase() === event.key.toLowerCase()

    const onDown = (event: { key: string }) => {
        if (match(event)) setPressed(true)
    }

    const onUp = (event: { key: string }) => {
        if (match(event)) setPressed(false)
    }

    useEffect(() => {
        window.addEventListener("keydown", onDown)
        window.addEventListener("keyup", onUp)
        return () => {
            window.removeEventListener("keydown", onDown)
            window.removeEventListener("keyup", onUp)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [key])

    return pressed
}