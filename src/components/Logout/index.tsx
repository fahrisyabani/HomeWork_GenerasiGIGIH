import React from 'react';
import { useAppDispatch } from '../../Store';
import { logout } from '../../server/authSlice';
import '../../App.css';

const BtnLogout: React.FC = () => {
  const dispatch = useAppDispatch();

  const handleLogout: () => void = () => {
    dispatch(logout());
  };

  return (
    <a type="submit" onClick={handleLogout}></a>
  );
};

export default BtnLogout;