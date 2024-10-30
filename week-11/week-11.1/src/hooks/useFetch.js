import { useEffect, useState } from "react"


export function useFetch(url, retry) {
    const[finalData, setFinalData] = useState({})
    const[loading, setLoading] = useState(true)

    async function getFinalDetails() {
        setLoading(true)
        const response = await fetch(url)
        const data = await response.json()
        setFinalData(data)
        setLoading(false)
    }


    useEffect(() => {
        getFinalDetails();
    }, [retry,url])


    useEffect(() => {
        const intervalId = setInterval(getFinalDetails(), retry * 1000)
        return () => clearInterval(intervalId);
    })
    return {
        finalData,
        loading
    }
}