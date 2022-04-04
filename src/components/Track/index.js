import React, { useState } from "react";

export default function Track({ url, title, artist, toggle, Select }) {
  const [isSelected, setIsSelected] = useState(Select);

  const handleSelect = () => {
    setIsSelected(!isSelected);
    toggle();
  };

  return (

    <div class="card mb-3 track">
      <div class="row g-0">
        <div class="col-md-4">
          <img src={url} class="img-fluid rounded-start" alt="..." />
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">{title}</h5>
            <p class="card-text">{artist}</p>
              <button
              className={`btn btn-select ${
                isSelected ? "btn-primary" : "btn-secondary"
              }`}
              onClick={handleSelect}
            >
              {isSelected ? "Deselect" : "Select"}
            </button>
          </div>
        </div>
      </div>
    </div>

    
  );
}