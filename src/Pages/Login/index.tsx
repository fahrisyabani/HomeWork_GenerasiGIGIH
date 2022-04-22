import React, { useEffect } from 'react';
import { getUserProfile } from '../../server';
import { login } from '../../server/authSlice';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Title2 from '../../components/Title/index';
import '../../sidebar.css';

export default function Login() {
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    const params = new URLSearchParams(window.location.hash);
    const accessTokenParams = params.get('#access_token');

    if (accessTokenParams !== null) {
      const setUserProfile = async () => {
        try {
          const response = await getUserProfile(accessTokenParams);
          dispatch(
            login({
              accessToken: accessTokenParams,
              user: response,
            })
          );
          history.push('/create-playlist');
        } catch (e) {
          alert(e);
        }
      };
      setUserProfile();
    }
  }, []);

  const getSpotifyLinkAuthorize = () => {
    const state = Date.now().toString();
    const CLIENT_ID = process.env.REACT_APP_SPOTIFY;
    const SPOTIFY_SCOPE = 'playlist-modify-private';
    const RESPONSE_TYPE = 'token';
    const REDIRECT_URI = 'http://localhost:3000/';

    return `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&response_type=${RESPONSE_TYPE}&redirect_uri=${REDIRECT_URI}&state=${state}&scope=${SPOTIFY_SCOPE}`;
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
            <a href={getSpotifyLinkAuthorize()}>
              <i className="bi bi-grid"></i>
              <span className="links-name">Dashboard</span>
            </a>
            {/* <span className="tooltip">Dashboard</span> */}
          </li>
          <li>
            <a href={getSpotifyLinkAuthorize()}>
              <i className="bi bi-card-text"></i>
              <span className="links-name">Create Playlist</span>
            </a>
            {/* <span className="tooltip">Create</span> */}
          </li>
          <li>
            <a href='/'>
              <i className="bi bi-graph-up"></i>
              <span className="links-name">Analytics</span>
            </a>
            {/* <span className="tooltip">User</span> */}
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
              <i className="bi bi-gear"></i>
              <span className="links-name">Setting</span>
            </a>
            {/* <span className="tooltip">User</span> */}
          </li>
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
            {/* <i className="bi bi-box-arrow-in-right" id="login">
            </i> */}
          </div>
        </div>
      </div>
      <div className="home-content">
        <div className="text">
          {/* Title */}
          <Title2 />
          {/* akhir Title */}

          <div className="col-md-3 hr">
            <hr></hr>
          </div>

          {/* button login */}
          <a href={getSpotifyLinkAuthorize()} className="btn btn-success">
            <i className="bi bi-spotify"></i> Login
          </a>
        </div>
      </div>
    </body>
  );
}