import React from 'react';

import Song from '../song/song';
import Button from '../song/button/button';
import Album from '../song/album/album';
import Artist from '../song/artist/artist';
import Judul from '../song/judul/judul';
import Image from '../song/image/image';

function Card() {

    return (
        <div className="row mb-3 justify-content-center text-center">
                <div className="col-md-5 mb-4">
                    <div className="card border-light">
                        {/* image */}
                        <Image />
                        {/* akhir image */}
                    
                        <div className="card-body">

                        {/* judul */}
                        <Judul />
                        {/* akhir judul */}

                        {/* artist */}
                        <Artist />
                        {/* akhir artist */}

                        {/* album */}
                        <Album />
                        {/* akhir album */}

                        {/* audio */}
                        <Song />
                        {/* akhir audio  */}

                        {/* Button */}
                        <Button />
                        {/* akhir Button */}

                        </div>
                    </div>
                </div>
        </div>
    )
}

export default Card;