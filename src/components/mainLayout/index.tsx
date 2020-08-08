import React from 'react'
import { Layout } from 'antd'
import AppSidebar from 'src/components/sidebar'
const { Header, Content, Footer } = Layout

const MainLayout = () => {
    return (
        <Layout style={{ minHeight: '100vh' }}>
            <AppSidebar />
            <Layout className="site-layout">
                <Header
                    className="site-layout-background"
                    style={{ padding: 0 }}
                />
                <Content style={{ margin: '0 16px' }}></Content>
                <Footer style={{ textAlign: 'center' }}></Footer>
            </Layout>
        </Layout>
    )
}

export default MainLayout
