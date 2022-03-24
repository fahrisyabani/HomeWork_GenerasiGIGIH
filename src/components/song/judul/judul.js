import React from "react";
import data from "../../../single-sample";

function Judul() {

    return (
        <h5 className="card-title">
            <i className="bi bi-music-note"></i>{data.name}
        </h5>
    )
}

export default Judul;