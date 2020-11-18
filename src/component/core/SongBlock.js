import React from 'react'
import SongCircle from './SongCircle'

function SongBlock({
    name="Song Name",
    artist = "Artist",
    album = "Album",
    image = "https://images.unsplash.com/photo-1502447533750-9860c1269ae3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    mood = "sad"
}) {
    return (
        <div className="SongBlock__container">
            <SongCircle image={image} mood={mood} />
            <h3>{name}</h3>
            <p>{artist} - {album}</p>
        </div>
    )
}

export default SongBlock
