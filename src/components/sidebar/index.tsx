import React, { useContext, useEffect } from 'react'
import { SharedBasketsContext, actions } from '../contexts/sharedBasketsContext'
import { Button, List } from 'antd'
// import useFetcher from 'src/utility/useFetcher'
import useRequest from 'src/utility/useRequest'
import './style.scss'
import Axios from 'axios'
import useFetcher from 'src/utility/useFetcher'
interface Props {}

// const basketsForUpdate: SharedBasketModel[] = [
//     { id: 'bsk_01', name: 'First basket' },
//     { id: 'bsk_02', name: 'Second basket' },
// ]

const SideBar = (props: Props) => {
    const { baskets, dispatch } = useContext<SharedBasketContext>(
        SharedBasketsContext
    )
    const [data, sendRequest] = useRequest<SharedBasketModel[]>()

    const updateBasketsHandler = () => {
        sendRequest(
            Axios.get('https://5bc0c8c284e95e001342c275.mockapi.io/baskets')
        )
    }

    useEffect(() => {
        dispatch({ type: actions.UPDATE, payload: data.data })
    }, [data])

    const clearBasketsHandler = () => {
        dispatch({ type: actions.CLEAR })
    }

    return (
        <div className="sidebar">
            <List
                itemLayout="horizontal"
                dataSource={baskets}
                renderItem={(item) => (
                    <List.Item>
                        <List.Item.Meta
                            title={<p>{`ID: ${item.id}`}</p>}
                            description={`Name: ${item.name}`}
                        />
                    </List.Item>
                )}
            />
            <Button type="primary" onClick={updateBasketsHandler}>
                Update
            </Button>
            <Button type="primary" onClick={clearBasketsHandler}>
                Clear
            </Button>
        </div>
    )
}

export default SideBar
