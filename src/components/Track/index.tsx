import React, { useState } from 'react';

interface IProps {
  url: string;
  title: string;
  artist: string;
  select: boolean;
  toggle: () => void;
}

const Track: React.FC<IProps> = ({ url, title, artist, select, toggle }) => {
  const [isSelected, setIsSelected] = useState<boolean>(select);

  const handleSelect = () => {
    setIsSelected(!isSelected);
    toggle();
  };

  return (
    <div className="card mb-3 track">
      <div className='container'>
        <div className="row g-0">
          <div className="col-md-12">
            <img src={url} className="img rounded-start" alt="..." />
          </div>
          <div className='row'>
            <div className="col-md-12">
              <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{artist}</p>
                <button
                  className={`btn btn-select ${isSelected ? 'btn-success' : 'btn-success'
                    }`}
                  onClick={handleSelect}
                >
                  {isSelected ? 'Deselect' : 'Select'}
                </button>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Track;