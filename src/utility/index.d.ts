interface HttpResponseModel<T> {
    data?: T
    success: boolean
    finished: boolean
    error: string
}
