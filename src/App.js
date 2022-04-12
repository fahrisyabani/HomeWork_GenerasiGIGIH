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
    <div className="App">
      {/* Jumbotron */}
      {/* <section className="jumbotron">
      <div className="container pt-3"> */}
        {/* Header */}
          {/* <Title /> */}
        {/* Akhir Header */}
        {/* <div className="col-md-3">
          <hr></hr>
        </div> */}
        
        {/* Main */}
          {/* <Card /> */}
        {/* Akhir Main */}
      {/* </div>
      </section> */}
      {/* Akhir Jumbotron */}

        {/* Footer */}
          {/* <Waves /> */}
        {/* Akhir Footer */}

         {/* Homework-6 */}
        {/* <div className='Music'>
          <section className='track'>
            <div className='container pt-3'> */}
              {/* Title */}
                {/* <Title2 /> */}
              {/* akhir Title */}
              {/* <div className="col-md-3">
              <hr></hr>
              </div> */}
              {/* Track */}
                {/* <Looping /> */}
              {/* akhir Track */}
            {/* </div>
          </section>
        </div> */}
        {/* Batas Homework-6 */}
  
        <div className='container pt-3'>
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
      </div>
    </div>
  );
}

export default App;
