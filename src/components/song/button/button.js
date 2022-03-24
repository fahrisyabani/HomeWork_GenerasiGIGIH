import React from "react";
import data from "../../../single-sample";

function Button() {

    return (
        <section id="Homework2">
        <div class="container pt-2">
        <div class="row text-center">
            <div class="col">
            <a href={data.album.artists[0].external_urls.spotify}>
            <button className="btn btn-primary btn-md mb-3 mt-4" type="button" href="#" id="btn">
                Select
            </button>
            </a>
            </div>
        </div>
        </div>
    </section>
    )
}

export default Button;