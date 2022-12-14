import {useState, useCallback} from "react";

export const useHttp = () => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [message, setMessage] = useState(null)
    const request = useCallback(async (url, method= 'GET', body = null, headers = {}) => {
        setLoading(true)
        try {
            if (body) {
                body = JSON.stringify(body)
                headers['Content-Type'] = 'application/json'
            }
            const response = await fetch(url, { method, body, headers })
            const data = await response.json()
            if (!response.ok) {
                throw new Error(data.message || 'Some thing wait wrong')
            }
            setLoading(false)
            setMessage(data.message)
            return data
        } catch (e) {
            setLoading(false)
            setMessage(e.message)
            setError(e.message)
            throw e
        }
    }, [])
    const clearError = () => setError(null)
    return {loading, request, error, message, clearError}
}