import { useEffect, useState, useCallback } from 'react'
import { AxiosResponse } from 'axios'
import { throttle } from 'throttle-debounce'

function useFetcher<T>(
    request: Promise<AxiosResponse<T>>
): HttpResponseModel<T> {
    const [state, setState] = useState<HttpResponseModel<T>>({
        error: '',
        success: false,
        finished: false,
    })
    const requestThrottle = useCallback(
        throttle(500, async () => {
            const { status, data } = await request
            if (status >= 200 && status < 300) {
                setState({
                    data,
                    finished: true,
                    success: true,
                    error: '',
                })
            } else {
                setState({
                    data,
                    finished: true,
                    success: false,
                    error: 'error occured',
                })
            }
        }),
        [request]
    )

    useEffect(() => {
        requestThrottle()
    })

    return state
}

export default useFetcher
