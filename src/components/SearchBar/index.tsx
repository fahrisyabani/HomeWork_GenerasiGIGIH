/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import '../../../src/App.css';
import { RootState, useAppSelector } from '../../store/index';
import { searchTrack } from '../../server/index';
import { Track as ITrack } from '../../variety/spotify';

// Url api for search music spotify
// const SPOTIFY_BASE_URL = 'https://api.spotify.com/v1';

interface IProps {
  onSuccess: (tracks: ITrack[]) => void;
}

const SearchBar: React.FC<IProps> = ({ onSuccess }) => {
  const [text, setText] = useState<string>('');
  const accessToken: string = useAppSelector((state: RootState) => state.auth.accessToken);

  const handleInput = (e: React.ChangeEvent) => {
    const target = e.target as HTMLTextAreaElement;
    setText(target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await searchTrack(text, accessToken);

      const tracks = response.tracks.items;
      onSuccess(tracks);
    } catch (e) {
      alert(e);
    }
  };

  // const clearSearch: () => void = () => {
  //   setText('');
  //   onClearSearch();
  // };

  return (
    <div className="searchBar">
      <form className="" onSubmit={handleSubmit}>
        <input
          type="text"
          name="query"
          placeholder="Search"
          aria-label="search-input"
          onChange={handleInput}
          value={text}
          required
        />
        {/* <button aria-label="search-button" className='btn btn-success'>
          <i className="bi bi-search"></i>
        </button> */}
      </form>
      {/* <button className="btn btn-text" onClick={clearSearch}>
        Clear Search
      </button> */}
    </div>

  );
};

export default SearchBar;