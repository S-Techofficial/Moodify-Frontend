import React from 'react'
import SongCircle from './SongCircle';


function SongBox({image,audio,name,artist,album}) {
    return (
        <div className="SongBox__container">
            <SongCircle image={image} audio={audio} />
            <h4>{name}</h4>
            <marquee>{artist} - {album}</marquee>
        </div>
    )
}

export default SongBox
