import { useEffect, useState } from "react";



export default function useFetch(url, options = {}) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    async function fetchData() {
        setLoading(true)
        try {
            const response = await fetch(url, { ...options })
            if (!response.ok) throw new error(response.statusText)
            const result = response.json()
            setData(result)
            setError(null)
            setLoading(false)

        } catch (error) {
            console.log(error)
            setError(error)
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchData()
    }, [url])

    return {
        data, loading, error
    }

}