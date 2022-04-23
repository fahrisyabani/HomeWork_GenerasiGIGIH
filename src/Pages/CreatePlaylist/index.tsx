/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from 'react';
import Track from '../../components/Track';
import SearchBar from '../../components/SearchBar';
import FormPlaylist from '../../components/FormPlaylist';
import BtnLogout from '../../components/Logout';
import { Track as ITrack } from '../../variety/spotify';
import { convertMsToHMS } from '../../server/duration';
import '../../sidebar.css';

const CreatePlaylist: React.FC = () => {
  const [tracks, setTracks] = useState<ITrack[]>([]);
  const [selectedTrackURI, setSelectedTrackURI] = useState<string[]>([]);
  const [selectedTracks, setSelectedTracks] = useState<ITrack[]>([]);
  const [isSearch, setIsSearch] = useState<boolean>(false);

  useEffect(() => {
    if (!isSearch) {
      const selectedTracks: ITrack[] = filterSelectedTracks();

      setTracks(selectedTracks);
    }
  }, [selectedTrackURI]);

  const filterSelectedTracks: () => ITrack[] = () =>
    tracks.filter((track) => selectedTrackURI.includes(track.uri));

  const handleSuccessSearch: (searchTracks: ITrack[]) => void = (
    searchTracks
  ) => {
    setIsSearch(true);

    const selectedSearchTracks = searchTracks.filter((data: any) =>
      selectedTrackURI.includes(data.uri)
    );

    setTracks([...new Set([...selectedSearchTracks, ...searchTracks])]);
  };

  // const clearSearch: () => void = () => {
  //   setTracks(selectedTracks);
  //   setIsSearch(false);
  // };

  const toggleSelect: (track: ITrack) => void = (track) => {
    const { uri } = track;

    if (selectedTrackURI.includes(uri)) {
      setSelectedTrackURI(
        selectedTrackURI.filter((item: string) => item !== uri)
      );
      setSelectedTracks(
        selectedTracks.filter((item: ITrack) => item.uri !== uri)
      );
    } else {
      setSelectedTrackURI([...selectedTrackURI, uri]);
      setSelectedTracks([...selectedTracks, track]);
    }
  };

  return (
    <body>
      <div className='sidebar'>
        <div className='logo-content'>
          <div className='logo'>
            <i className="bi bi-spotify"></i>
            <div className='logo-name'>Spotify</div>
          </div>
        </div>
        <ul className="nav-list">
          <li>
            <>
              <i className="bi bi-search"></i>
              <SearchBar
                onSuccess={(tracks) => handleSuccessSearch(tracks)}
              />
            </>
            {/* <span className="tooltip">Search</span> */}
          </li>
          <li>
            <a href='/'>
              <i className="bi bi-house-door"></i>
              <span className="links-name">Home</span>
            </a>
            {/* <span className="tooltip">Create</span> */}
          </li>
          <li>
            <a href='/'>
              <i className="bi bi-door-open"></i>
              <span className="links-name">Your Library</span>
            </a>
            {/* <span className="tooltip">Create</span> */}
          </li>
          <li>
            <a href='/'>
              <i className="bi bi-person-circle"></i>
              <span className="links-name">User</span>
            </a>
            {/* <span className="tooltip">User</span> */}
          </li>
          <li>
            <a href='/'>
              <i className="bi bi-box-arrow-in-left"></i>
              <span className="links-name"><BtnLogout />Log out</span>
            </a>
            {/* <span className="tooltip">User</span> */}
          </li>
          <div>
            <div className="col-md-10 hr">
              <hr></hr>
            </div>
            <FormPlaylist uris={selectedTrackURI} />
          </div>
        </ul>
        <div className="profile-content">
          <div className="profile">
            <div className="profile-details">
              <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" className="bi bi-person-workspace" viewBox="0 0 16 16">
                <path d="M4 16s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H4Zm4-5.95a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
                <path d="M2 1a2 2 0 0 0-2 2v9.5A1.5 1.5 0 0 0 1.5 14h.653a5.373 5.373 0 0 1 1.066-2H1V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v9h-2.219c.554.654.89 1.373 1.066 2h.653a1.5 1.5 0 0 0 1.5-1.5V3a2 2 0 0 0-2-2H2Z" />
              </svg>
              <div className="name-job">
                <div className="name">Fahri Syabani</div>
                <div className="job">Web Designer</div>
              </div>
            </div>
            {/* <i className="bi bi-box-arrow-in-left" id="logout"></i> */}
          </div>
        </div>
      </div>
      <div className="home-content-desk">
        <div className="text">
          {/* <hr /> */}
          {/* <SearchBar
            onSuccess={(tracks) => handleSuccessSearch(tracks)}
            onClearSearch={clearSearch}
          /> */}
          <div className='no-track'>
            {tracks.length === 0 && <p>Track not selected!!
              <br></br>
              <svg xmlns="http://www.w3.org/2000/svg" width="25%" height="25%" fill="currentColor" className="bi bi-card-image" viewBox="0 0 16 16">
                <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                <path d="M1.5 2A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13zm13 1a.5.5 0 0 1 .5.5v6l-3.775-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12v.54A.505.505 0 0 1 1 12.5v-9a.5.5 0 0 1 .5-.5h13z" />
              </svg>
            </p>}
          </div>
          <div className="track-list">
            {tracks.map((track) => (
              <Track
                key={track.id}
                url={track.album.images[0].url}
                title={track.name}
                artist={track.artists[0].name}
                select={selectedTrackURI.includes(track.uri)}
                toggle={() => toggleSelect(track)}
                duration={convertMsToHMS(track.duration_ms)}
              />
            ))}
          </div>
        </div>
      </div>
    </body>
  );
};

export default CreatePlaylist;