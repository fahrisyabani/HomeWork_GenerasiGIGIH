import React from "react";
import data from "../../../single-sample";

function Album() {

    return (
        <p className="card-text-a mt-3 mb-5">
            Album : {data.album.name}
        </p>
    )
}

export default Album;