import React, { useEffect } from 'react';
// import config from "../../utils/config";
import { getUserProfile } from '../../server';
import { login } from '../../server/authSlice'; 
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Title2 from '../../components/Title/index';
import { Button } from '@mui/material';

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
    const CLIENT_ID= process.env.REACT_APP_SPOTIFY;
    const SPOTIFY_SCOPE = 'playlist-modify-private';
    const RESPONSE_TYPE = 'token';
    const REDIRECT_URI = 'http://localhost:3000/';

    return `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&response_type=${RESPONSE_TYPE}&redirect_uri=${REDIRECT_URI}&state=${state}&scope=${SPOTIFY_SCOPE}`;
  };

  return (
    <div className="login-wrapper">
        {/* Title */}
        <Title2 />
        {/* akhir Title */}

        <div className="col-md-3 hr">
        <hr></hr>
        </div>

      {/* <a href={getSpotifyLinkAuthorize()} className="btn btn-primary">
        Login
      </a> */}

      <Button href={getSpotifyLinkAuthorize()} variant="contained" color="primary">
        Login
      </Button>
    </div>
  );
}