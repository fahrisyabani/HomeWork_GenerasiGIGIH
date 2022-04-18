import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { TRootState } from '../../Store/index';
import { addTracksToPlaylist, createPlaylist } from '../../server/index';

interface IProps {
  uris: string[];
}

interface IFormState {
  title: string;
  description: string;
}

const FormPlaylist: React.FC<IProps> = ({ uris }) => {
  const [playlist, setPlaylist] = useState<IFormState>({
    title: '',
    description: '',
  });
  const accessToken: string = useSelector((state: TRootState) => state.auth.accessToken);
  const userId: string = useSelector((state: TRootState) => state.auth.user.id);

  const handleChange = (e: React.ChangeEvent) => {
    const target = e.target as HTMLTextAreaElement;
    const { name, value } = target;

    setPlaylist({ ...playlist, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (playlist.title.length > 10) {
      try {
        const responsePlaylist = await createPlaylist(accessToken, userId, {
          name: playlist.title,
          description: playlist.description,
        });

        await addTracksToPlaylist(accessToken, responsePlaylist.id, uris);

        setPlaylist({
          title: '',
          description: '',
        });

        alert('Playlist created successfully!');
      } catch (e) {
        alert(e);
      }
    } else {
      alert('Title at least 10 characters.');
    }
  };

  return (
    <div className="form-playlist mt-5">
      <h3>Create Playlist</h3>
      <div className="row mb-5 mt-3">
        <div className="col-md-5">
          <form className="form" onSubmit={handleSubmit} >
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label" > Title </label>
              < input type="text" name="title" className="form-control" id="title" value={playlist.title} onChange={handleChange} required />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlTextarea1" className="form-label" > Description </label>
              <textarea id="desc" name="description" value={playlist.description} onChange={handleChange} className="form-control" rows={3} required> </textarea>
            </div>

            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormPlaylist;
