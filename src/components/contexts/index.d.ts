interface ReducerAction<T> {
    type: string,
    payload?: T
}

interface SharedBasketModel {
    id: string,
    name: string,
}

interface SharedBasketContext {
    dispatch: (action: ReducerAction<SharedBasketModel[] | undefined>) => void,
    baskets: SharedBasketModel[]
}
