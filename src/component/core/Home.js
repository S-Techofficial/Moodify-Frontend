import React from 'react';
import Sidebar from './Sidebar';
import Player from './Player';
import Navbar from './Navbar';
import Dashboard from '../user/Dashboard';

function Home() {
    return (
        <div className="home__container">
            <div className="homeContainer__dashboard">
                <Sidebar />
                <div className="songs__dashboard">
                    <Navbar />
                    <Dashboard />
                </div>
            </div>
            
            <Player />

        </div>
    )
}

export default Home
