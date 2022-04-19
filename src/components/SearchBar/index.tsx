/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import '../../../src/App.css';
import { RootState, useAppSelector } from '../../Store/index';
import { searchTrack } from '../../server/index';
import { Track as ITrack } from '../../variety/spotify';

// Url api for search music spotify
// const SPOTIFY_BASE_URL = 'https://api.spotify.com/v1';

interface IProps {
  onSuccess: (tracks: ITrack[]) => void;
  onClearSearch: () => void;
}

const SearchBar: React.FC<IProps> = ({ onSuccess, onClearSearch }) => {
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
    <div className="search">
      <form className="form-search" onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            name="query"
            placeholder="Search"
            onChange={handleInput}
            required
            value={text}
          />
          <input type="submit" className="btn btn-primary" value="Search" />
        </div>
      </form>
      {/* <button className="btn btn-text" onClick={clearSearch}>
        Clear Search
      </button> */}
    </div>
  );
};

export default SearchBar;