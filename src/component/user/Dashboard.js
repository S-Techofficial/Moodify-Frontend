import React from 'react'
import DashboardBlocks from './DashboardBlocks'

function Dashboard() {
    return (
        <div className="dashboard__container">
            <div className="dashboard__main">
                <DashboardBlocks title="Trending" />
                <DashboardBlocks title="Recently Played" />
                <DashboardBlocks title="Recommended Playlists" />
                <DashboardBlocks title="Custom Playlists" />
            </div>
            <div className="chatbox">

            </div>
        </div>
    )
}

export default Dashboard
