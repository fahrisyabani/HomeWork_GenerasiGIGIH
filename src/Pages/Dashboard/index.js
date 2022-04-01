import React, { useEffect, useState } from "react";
import '../../App.css'

import Track from "../../components/Track";
import SearchBar from "../../components/SearchBar";

export default function Home() {
  const [tracks, setTracks] = useState([]);
  const [accessToken, setAccessToken] = useState("");
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [selectedTrackURI, setSelectedTrackURI] = useState([]);
  const [isSearch, setIsSearch] = useState(false);

  const [setToken] = useState("")


  useEffect(() => {
    const params = new URLSearchParams(window.location.hash);
    const accessToken = params.get("#access_token");
    setAccessToken(accessToken);
    setIsAuthorized(accessToken !== null);
  }, []);

  
  useEffect(() => {
    if (!isSearch) {
      const selectedTracks = filterSelectedTracks();

      setTracks(selectedTracks);
    }
  }, [selectedTrackURI]);
  

  const getSpotifyLinkAuthorize = () => {
    const state = Date.now().toString();
    const CLIENT_ID= process.env.REACT_APP_SPOTIFY;
    const SPOTIFY_SCOPE = "playlist-modify-private";
    const RESPONSE_TYPE = "token";
    const REDIRECT_URI = "http://localhost:3000/";

    return `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&response_type=${RESPONSE_TYPE}&redirect_uri=${REDIRECT_URI}&state=${state}&scope=${SPOTIFY_SCOPE}`;
  };

  
  const filterSelectedTracks = () => {
    return tracks.filter((track) => selectedTrackURI.includes(track.uri));
  };

  
  const handleSuccessSearch = (searchTracks) => {
    setIsSearch(true);
    const selectedTracks = filterSelectedTracks();

    
    const searchDistinctTracks = searchTracks.filter(
      (track) => !selectedTrackURI.includes(track.uri)
    );

    
    setTracks([...selectedTracks, ...searchDistinctTracks]);
  };

  const clearSearch = () => {
    const selectedTracks = filterSelectedTracks();

    setTracks(selectedTracks);
    setIsSearch(false);
  };

  // Logout
  const logout = () => {
    setToken("")
    window.localStorage.removeItem("token")
  }

  const toggleSelect = (track) => {
    const uri = track.uri;

    if (selectedTrackURI.includes(uri)) {
      setSelectedTrackURI(selectedTrackURI.filter((item) => item !== uri));
    } else {
      setSelectedTrackURI([...selectedTrackURI, uri]);
    }
  };

  return (
    <div className="container">
      {!isAuthorized && (
        <div className="login-app">
          <a href={getSpotifyLinkAuthorize()} className="btn btn-primary">
            Login
          </a>
        </div>
        
      )}

    

      {isAuthorized && (
        <>
          <SearchBar
            accessToken={accessToken}
            onSuccess={(tracks) => handleSuccessSearch(tracks)}
            onClearSearch={clearSearch}
          />

          {tracks.length === 0 && <p className="no-image">No Image</p>}

          <div className="track-list">
            {tracks.map((track) => (
              <Track
                key={track.id}
                url={track.album.images[0].url}
                title={track.name}
                artist={track.artists[0].name}
                toggleSelect={() => toggleSelect(track)}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}