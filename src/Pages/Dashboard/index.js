import React, { useEffect, useState } from "react";
import '../../App.css'
import Track from "../../components/Track";
import SearchBar from "../../components/SearchBar";

import FormPlaylist from "../../components/FormPlaylist";
import { getUserProfile } from "../../server/index"

function Home() {
  const [tracks, setTracks] = useState([]);
  const [accessToken, setAccessToken] = useState("");
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [selectedTrackURI, setSelectedTrackURI] = useState([]);
  const [isSearch, setIsSearch] = useState(false);
  // homework-9
  const [selectedTracks, setSelectTracks] = useState([]);
  const [user, setUser] = useState({});

  const [setToken] = useState("")


  useEffect(() => {
    const params = new URLSearchParams(window.location.hash);
    const accessToken = params.get("#access_token");

    if (accessToken !== null) {
      setAccessToken(accessToken);
      setIsAuthorized(accessToken !== null);

      const setUserProfile = async () => {
        try {
          const response = await getUserProfile(accessToken);

          setUser(response);
        } catch (e) {
          alert(e);
        }
      };

      setUserProfile();
    }

    // setAccessToken(accessToken);
    // setIsAuthorized(accessToken !== null);
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
    // const selectedTracks = filterSelectedTracks();

    
    const selectedSearchTracks = searchTracks.filter((data) =>
      selectedTrackURI.includes(data.uri)
    );

    
    setTracks([...new Set([...selectedSearchTracks, ...searchTracks])]);
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
      setSelectTracks(selectedTrackURI.filter((item) => item.uri !== uri));
    } else {
      setSelectTracks([...selectedTracks, track]);
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
        {/* baru */}
        <FormPlaylist
            accessToken={accessToken}
            userId={user.id}
            uris={selectedTrackURI}
          />
         

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
                select={selectedTrackURI.includes(track.uri)}
                toggle={() => toggleSelect(track)}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default Home;