import { useEffect, useState, useRef, useCallback } from 'react'
import { AxiosResponse } from 'axios'
import { throttle } from 'throttle-debounce'

function useRequest<T>(): [
    HttpResponseModel<T>,
    (send: Promise<AxiosResponse<T>>) => void
] {
    const [request, setRequest] = useState<Promise<AxiosResponse<T>>>()
    const openForRequest = useRef(false)
    const [state, setState] = useState<HttpResponseModel<T>>({
        error: '',
        success: false,
        finished: false,
    })

    const setter = useCallback(
        () => (request: Promise<AxiosResponse<T>>) => {
            setRequest(request)
            openForRequest.current = true
        },
        [setRequest]
    )

    useEffect(() => {
        throttle(500, async () => {
            if (request == null || !openForRequest.current) {
                return
            }

            openForRequest.current = false

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

            setRequest(undefined)
        })
    })

    return [state, setter]
}

export default useRequest
