import React from 'react'
import DashboardBlocks from './DashboardBlocks'

function Dashboard() {
    return (
        <div className="dashboard__container">
            <div className="dashboard__main">
                <DashboardBlocks />
            </div>
            <div className="chatbox">

            </div>
        </div>
    )
}

export default Dashboard
