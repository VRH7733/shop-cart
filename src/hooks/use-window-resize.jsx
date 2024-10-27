import { useLayoutEffect } from "react";
import { useState } from "react";





export default function useWindowResize() {
    const [windowSize, setWindowSize] = useState({
        height: 0,
        width: 0
    })

    function handleResize() {
        setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight
        })
    }

    useLayoutEffect(() => {
        handleResize()
        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize)
        }

    }, [])

    return windowSize
}