/* eslint-disable no-undef */
import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import SearchBar from '.';
import store from '../../Store';
import { Provider } from 'react-redux';
import userEvent from '@testing-library/user-event';

const setup = () =>
  render(
    <Provider store={store}>
      <SearchBar />
    </Provider>
  );

describe('Render Search component first', () => {
  beforeEach(setup);
  afterEach(cleanup);

  it('Success render Search component', () => {
    expect(screen.getByLabelText('search-input')).toBeInTheDocument();
  });

  it('Search the input value must be the same as the input', () => {
    const searchInput = screen.getByLabelText('search-input');
    userEvent.type(searchInput, 'welcome user');

    expect(searchInput.value).toBe('welcome user');
  });
});