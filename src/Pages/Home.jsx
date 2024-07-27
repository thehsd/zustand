import React from 'react'
import Header from '../Components/Base/Header'
import { Outlet } from 'react-router-dom'

const Home = () => {
    return (
        <div>
            <Header />
            <main>

                <Outlet />
            </main>
        </div>
    )
}

export default Home