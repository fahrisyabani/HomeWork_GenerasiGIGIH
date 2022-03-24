import React from "react";
import data from "../../../single-sample";

function Image() {

    return (
        <img src={data.album.images[0].url} width="50" className="card-img-top" alt="JP saxe"/>
    )
}

export default Image;