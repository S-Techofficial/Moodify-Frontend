import React from 'react'

function SongCircle({
    image,
    mood
}) {
    let color=""
    if(mood === "sad"){
        color = "#a2d5f2"
    }
    return (
        <div className="SongCircle__container" style={{backgroundImage:image,backgroundColor:color}}>
            
        </div>
    )
}

export default SongCircle
