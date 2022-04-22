import React from 'react';
import data from './data';

function Album({name, album, images, songTitle, artists}) {

    return (

        <div className="row mb-3 justify-content-center">
                <div className="col-md-3 mb-4">
                    <div className="card border-light">
                    <img src={images} alt={name} className="card-img-track"/>
                        <div className="card-body">
                            <h3>{name}</h3>
                            <h5>{album}</h5>
                            <p>{songTitle}</p>
                            <p>{artists}</p>
                            <button className="btn btn-primary mb-3 mt-3 btn-sm" type="button" href="#" id="btn">
                              Select
                            </button>
                        </div>
                    </div>
                </div>
        </div>

    );
}

  function Looping() {

    return (
        <div className="table-of-tracks text-center">
        {data.map((data) => {
          return (
            <Album
              key={data.album.id}
              album={data.album.name}
              images={data.album.images[0].url}
              songTitle={data.name}
              artists={data.artists[0].name}
            />
          );
        })}
      </div>
    );
  }


  export default Looping;