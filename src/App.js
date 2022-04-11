import React from 'react';

import {
  Redirect,
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import './App.css';
import { useSelector } from 'react-redux';
import CreatePlaylist from './Pages/CreatePlaylist';
import Login from './Pages/Login';

function App() {
  const isAuthorized = useSelector((state) => state.auth.isAuthorized);

  return (
    
    <Router>
      <Switch>
        <Route path="/create-playlist" exact>
          {isAuthorized ? <CreatePlaylist /> : <Redirect to="/" />}
        </Route>
        <Route path="/" exact>
          <Login />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
