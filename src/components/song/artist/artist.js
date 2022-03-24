import React from "react";
import data from "../../../single-sample";

function Artist() {

    return (
        <p className="card-text py-1">{data.artists[0].name}</p>
    )
}

export default Artist;