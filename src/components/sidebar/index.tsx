import React, { useContext, useEffect, useState } from 'react'
import { SharedBasketsContext, actions } from '../contexts/sharedBasketsContext'
import { Layout, Menu } from 'antd'
import {
    TeamOutlined,
    UserOutlined,
    SyncOutlined,
    LogoutOutlined,
    SettingOutlined,
} from '@ant-design/icons'
import useRequest from 'src/utility/useRequest'
import './style.scss'
import Axios from 'axios'

const { Sider } = Layout
const { SubMenu } = Menu

interface Props {}

// const basketsForUpdate: SharedBasketModel[] = [
//     { id: 'bsk_01', name: 'First basket' },
//     { id: 'bsk_02', name: 'Second basket' },
// ]

const AppSidebar = () => {
    const [isCollapsed, collapse] = useState(false)
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
    }, [data, dispatch])

    return (
        <Sider collapsible collapsed={isCollapsed} onCollapse={collapse}>
            <div className="logo" />
            <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                <SubMenu key="sub1" icon={<UserOutlined />} title="User">
                    <Menu.Item icon={<SettingOutlined />}>Profile</Menu.Item>
                    <Menu.Item icon={<LogoutOutlined />}>Logout</Menu.Item>
                </SubMenu>
                <SubMenu key="sub2" icon={<TeamOutlined />} title="Baskets">
                    {baskets.map((b) => (
                        <Menu.Item key={b.id}>{b.name}</Menu.Item>
                    ))}
                    <Menu.Item
                        icon={<SyncOutlined />}
                        onClick={updateBasketsHandler}
                    >
                        Refresh
                    </Menu.Item>
                </SubMenu>
            </Menu>
        </Sider>
    )
}

export default AppSidebar
