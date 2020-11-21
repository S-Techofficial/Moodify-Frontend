import React, { useEffect, useState } from 'react'
import { getSongs } from './helper/coreapicalls'
import SongBox from './SongBox';



function SongBlock() {


    const [songs, setSongs] = useState([]);
    const [error, setError] = useState(false);

    const loadSongs = () => {
        getSongs().then(data => {
            if (data.error) {
                setError(data.error)
                console.log(error)
            } else {
                setSongs(data)
            }
        }).catch(err => console.log(err))
    }

    useEffect(() => {
        loadSongs()
    }, [])



    return (
        <div className="SongBlock__container">
            {songs.map((song, index) => {
                return (
                    <SongBox image={song.image} audio={song.audio} name={song.name} artist={song.artist} album={song.album} />
                )
            })}

        </div>
    )
}

export default SongBlock
