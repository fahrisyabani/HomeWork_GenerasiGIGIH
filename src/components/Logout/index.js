import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../../server/authSlice';

function BtnLogout() {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="container">
        <a className="navbar-brand" href="/">Navbar</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          </ul>
          <form className="d-flex">
            {/* <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"> */}
            <button className="btn btn-outline-primary" type="submit" onClick={handleLogout}>Logout</button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default BtnLogout;