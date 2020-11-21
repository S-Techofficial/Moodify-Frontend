import { Grid, IconButton, Slider } from '@material-ui/core';
import PauseIcon from '@material-ui/icons/Pause';
import RepeatIcon from '@material-ui/icons/Repeat';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
import React, { useState } from 'react';
import SongCircle from './SongCircle';
import VolumeDownIcon from '@material-ui/icons/VolumeDown';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import ReactHowler from 'react-howler';





function Player({
    mood = "ANGRY",
    image = "https://images.unsplash.com/photo-1502447533750-9860c1269ae3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    name = "Song Name",
    artist = "Artist",
    album = "Album",
    audio
}) {

    const [slide, setSlide] = useState(0);
    const [playing, setPlaying] = useState(false);

    const handleChange = (e) => {
        setSlide(e.target.value)
    }

    console.log(playing)

    const handlePlay = () => {
        setPlaying(true)
    }   

    const handlePause = (e) => {
        setPlaying(false)
    }

    return (
        <div className="player__container">
            <div className="slider-container">
                <span className="bar"></span>
                <span className="fill" style={{ width: `${slide}%` }}></span>
                <input className="slider" type="range" min="0" max="100" defaultValue="0" onChange={(e) => handleChange(e)} />
            </div>

            <div id="timer">0:00</div>
            <div id="duration">0:00</div>

            <div>
                <SongCircle mood={mood} image={image} />

                <div className="playerSong__details">
                    <h3>{name}</h3>
                    <p>{artist} - {album}</p>
                </div>
            </div>

            <ReactHowler 
                src="audio\Deedar_De_-_Chhalaang.mp3"
                playing={playing}
            />

            <div className="player__buttons" style={{ margin: "0px 30px" }}>
                <IconButton>
                    <ShuffleIcon />
                </IconButton>
                <IconButton>
                    <SkipPreviousIcon style={{ fontSize: "30px", color: "#000" }} />
                </IconButton>
                <IconButton onClick={handlePause} style={{ display: playing ? "visible" : "none" }}>
                    <PauseIcon style={{ fontSize: "50px", color: "#000" }} />
                </IconButton>
                <IconButton onClick={handlePlay} style={{ display: playing ? "none" : "visible" }}>
                    <PlayArrowIcon style={{ fontSize: "50px", color: "#000" }} />
                </IconButton>
                <IconButton>
                    <SkipNextIcon style={{ fontSize: "30px", color: "#000" }} />
                </IconButton>
                <IconButton>
                    <RepeatIcon />
                </IconButton>
            </div>

            <div className="player__audio">
                <Grid container spacing={2} >
                    <Grid item>
                        <PlaylistPlayIcon />
                    </Grid>
                    <Grid item>
                        <VolumeDownIcon />
                    </Grid>
                    <Grid item xs >
                        <Slider />
                    </Grid>
                </Grid>
            </div>

        </div>
    )
}

export default Player
