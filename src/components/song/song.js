import React from "react";
import song from '../../assets/Queen – Bohemian Rhapsody.mp3'

function Song() {

    return (
        <audio controls>
        <source src={song} type="audio/mpeg" />
        </audio>
    )
}

export default Song;