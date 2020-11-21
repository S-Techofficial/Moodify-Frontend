import React from 'react'
import Navbar from './Navbar'
import Player from './Player'
import Sidebar from './Sidebar'

function Base({ children }) {
    return (
        <div className="home__container">
            <div className="homeContainer__dashboard">
                <Sidebar />
                <div className="songs__dashboard">
                <Navbar />
                    {children}
                </div>
            </div>

            <Player />

        </div>
    )
}

export default Base
