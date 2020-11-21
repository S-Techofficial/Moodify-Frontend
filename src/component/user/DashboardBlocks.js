import React from 'react'
import { Link } from 'react-router-dom'
import SongBlock from '../core/SongBlock'

function DashboardBlocks({
    title,
}) {
    return (
        <div className="dashboardBlocks__container">
            <div className="dashboardBlocks__heading">
                <h2>{title}</h2>
                <Link to="playlists/"><p>See more...</p></Link>
            </div>
            <div className="dashboardBlocks_element">
                <SongBlock/>
            </div>
        </div>
    )
}

export default DashboardBlocks
