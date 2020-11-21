import React from 'react'
import PlayArrowIcon from '@material-ui/icons/PlayArrow';

function SongCircle({
    image, audio
}) {

    const SoundPlay = (src) => {
        return (
            <audio src={src} type="audio/mp3" autoPlay />
        )
    }



    return (
        <div className="SongCircle__container" style={{ backgroundImage: `url(${image})`, backgroundSize: "cover" }}>
            <button className="playButton" onClick={() => SoundPlay(audio)} ><PlayArrowIcon style={{ fontSize: "50px", color: "#fff" }} /></button>
        </div>
    )
}

export default SongCircle
