import { useEffect } from "react";
import { useState } from "react";

export function useFetch(url, retry) {
    const[data, setData] = useState({})
    cosnt[loading, setLoading] = useState(true)

    async function getUserDetails() {
        setLoading(true)
        const response = await fetch("api.amazon.in/search")
        const data = await response.json();
        setData(data)
        setLoading(false)
    }

    useEffect(() => {
        getUserDetails();
    },[url, retry])
    
    useEffect(() => {
        const handleInterval = setInterval(url, retry * 2000)
        return () => clearInterval(handleInterval)
    })

    return({
        data,
        loading
    })
} 