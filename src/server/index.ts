// Url api for search music spotify
const SPOTIFY_BASE_URL = 'https://api.spotify.com/v1';

export const searchTrack = async (query: string, accessToken: string) => {
  const requestOptions = {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
  };

  const response = await fetch(
    `${SPOTIFY_BASE_URL}/search?type=track&q=${query}`,
    requestOptions
  ).then((data) => data.json());

  return response;
};

export const getUserProfile = async (accessToken: string) => {
  const requestOptions = {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
  };

  const response = await fetch(
    `${SPOTIFY_BASE_URL}/me`,
    requestOptions
  ).then((data) => data.json());

  return response;
};

export const createPlaylist = async (
  accessToken: string,
  userId: string,
  { name, description }: { name: string; description: string }
) => {
  const data = JSON.stringify({
    name,
    description,
    public: false,
    collaborative: false,
  });

  const requestOptions = {
    method: 'POST',
    body: data,
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
  };

  const response = await fetch(
    `${SPOTIFY_BASE_URL}/users/${userId}/playlists`,
    requestOptions
  ).then((data) => data.json());

  return response;
};

export const addTracksToPlaylist = async (accessToken: string, playlistId: string, uris: string[]) => {
  const data = JSON.stringify({
    uris,
  });

  const requestOptions = {
    method: 'POST',
    body: data,
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
  };

  const response = await fetch(
    `${SPOTIFY_BASE_URL}/playlists/${playlistId}/tracks`,
    requestOptions
  ).then((data) => data.json());

  return response;
};