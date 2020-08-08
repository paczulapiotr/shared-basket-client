import React from 'react'
import SharedBasketContextProvider from 'src/components/contexts/sharedBasketsContext'
import MainLayout from 'src/components/mainLayout'
import 'src/App.scss'
import 'antd/dist/antd.css'

function App() {
    return (
        <div className="App">
            <SharedBasketContextProvider>
                <MainLayout />
            </SharedBasketContextProvider>
        </div>
    )
}

export default App
