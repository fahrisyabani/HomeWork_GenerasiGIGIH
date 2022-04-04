import React, { useState } from "react";
import { addTracksToPlaylist, createPlaylist } from "../../server/index";

export default function FormPlaylist({ accessToken, userId, uris }) {
  const [playlist, setPlaylist] = useState({
    title: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setPlaylist({ ...playlist, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (playlist.title.length > 10) {
      try {
        const responsePlaylist = await createPlaylist(accessToken, userId, {
          name: playlist.title,
          description: playlist.description,
        });

        await addTracksToPlaylist(accessToken, responsePlaylist.id, uris);

        setPlaylist({
          title: "",
          description: "",
        });

        alert("Playlist created successfully!");
      } catch (e) {
        alert(e);
      }
    } else {
      alert("Title must be at least 10 characters long.");
    }
  };

  return (
    <div className="form-playlist mt-5">
      <h3>Create Playlist</h3>
      <div className="row mb-5 mt-3">
        <div className="col-md-5">
          <form className="form" onSubmit={handleSubmit}>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Title</label>
            <input type="text" name="title" class="form-control" id="title" value={playlist.title} onChange={handleChange} required/>
          </div>
          <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">Description</label>
            <textarea id="desc" name="description" value={playlist.description} onChange={handleChange} class="form-control" rows="3" required></textarea>
          </div>
          
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
        </div>
      </div>

    </div>
  );
}