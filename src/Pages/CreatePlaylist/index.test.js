/* eslint-disable no-undef */
import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import store from '../../Store';
import { Provider } from 'react-redux';
import CreatePlaylist from '.';
import userEvent from '@testing-library/user-event';
import { rest } from 'msw';
import { SetupServer } from 'msw/node';

// Url api for search music spotify
const SPOTIFY_BASE_URL = 'https://api.spotify.com/v1';

export const server = SetupServer(
  rest.get(`${SPOTIFY_BASE_URL}/search`, (_req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        tracks: {
          items: [
            {
              id: '1',
              album: {
                images: [
                  {
                    url: 'Images URL',
                  },
                ],
              },
              name: 'Track Title',
              artists: [
                {
                  name: 'Track Artist',
                },
              ],
              external_urls: {
                spotify: 'Spotify URL',
              },
              uri: 'Track Uri',
            },
          ],
        },
      })
    );
  })
);

const setup = () =>
  render(
    <Provider store={store}>
      <CreatePlaylist />
    </Provider>
  );

describe('Create Playlist must be rendered', () => {
  beforeEach(setup);
  beforeAll(() => server.listen());
  afterEach(() => {
    server.resetHandlers();
    cleanup();
  });
  afterAll(() => server.close());

  it('Create a tracks after search', async () => {
    const buttonSearch = screen.getByLabelText('search-button');

    userEvent.click(buttonSearch);

    await screen.findByText('Track Title');
    expect(screen.getByText('Track Title')).toBeInTheDocument();
  });

  it('Create a track items after search', async () => {
    const searchInput = screen.getByLabelText('search-input');
    const buttonSearch = screen.getByLabelText('search-button');

    userEvent.type(searchInput, 'Substitute');
    userEvent.click(buttonSearch);

    await screen.findByText(/track title/i);

    const imageTrack = screen.getByLabelText('image-track');
    const titleTrack = screen.getByLabelText('title-track');
    const artistTrack = screen.getByLabelText('artist-track');
    const btnTrack = screen.getByLabelText('button-track');

    expect(imageTrack).toBeInTheDocument();
    expect(titleTrack).toBeInTheDocument();
    expect(artistTrack).toBeInTheDocument();
    expect(btnTrack).toBeInTheDocument();
  });
});