/* eslint-disable no-undef */
import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import store from '../../Store';
import { Provider } from 'react-redux';
import FormPlaylist from '.';
import userEvent from '@testing-library/user-event';

const setup = () =>
  render(
    <Provider store={store}>
      <FormPlaylist />
    </Provider>
  );

describe('Form Create Playlist must be rendered', () => {
  beforeEach(setup);
  afterEach(cleanup);

  it('Success rendered Create Playlist', () => {
    expect(screen.getByText(/create playlist/i)).toBeInTheDocument();
    expect(screen.getByLabelText('input-title')).toBeInTheDocument();
    expect(screen.getByLabelText('input-description')).toBeInTheDocument();
    expect(screen.getByText('Create')).toBeInTheDocument();
  });

  it('Fill in the form Create Playlist', () => {
    const titleInput = screen.getByLabelText('input-title');
    const descriptionInput = screen.getByLabelText('input-description');

    userEvent.type(titleInput, 'Title Playlist');
    userEvent.type(descriptionInput, 'Playlist Description');

    expect(titleInput).toHaveValue('Title Playlist');
    expect(descriptionInput).toHaveValue('Playlist Description');
  });
});