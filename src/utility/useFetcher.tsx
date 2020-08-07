import { useEffect, useState } from 'react'
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

    useEffect(() => {
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
        })
    })

    return state
}

export default useFetcher
