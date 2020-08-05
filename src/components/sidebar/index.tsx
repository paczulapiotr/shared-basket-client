import React, { useContext } from 'react'
import { SharedBasketsContext, actions } from '../contexts/sharedBasketsContext'
import { Button, List } from 'antd'
import './style.scss'
interface Props {}

const basketsForUpdate: SharedBasketModel[] = [
    { id: 'bsk_01', name: 'First basket' },
    { id: 'bsk_02', name: 'Second basket' },
]

const SideBar = (props: Props) => {
    const { baskets, dispatch } = useContext<SharedBasketContext>(
        SharedBasketsContext
    )

    const updateBasketsHandler = () => {
        dispatch({ type: actions.UPDATE, payload: basketsForUpdate })
    }
    const clearBasketsHandler = () => {
        dispatch({ type: actions.CLEAR })
    }

    return (
        <div>
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
