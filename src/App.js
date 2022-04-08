import './App.css';
import Title from './components/title/title'
import Card from './components/card/card.js';
import Waves from './components/waves/waves';
import Looping from './HomeWork6/Home/track';
import Title2 from './HomeWork6/Home/title';
import {useEffect, useState} from 'react';
import Dashboard from './Pages/Dashboard';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import CreatePlaylist from './Pages/CreatePlaylist';
import Login from './Pages/Login';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

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

        

        {/* HomeWork-7 */}
        {/* <div className='Music2'>
          <section className='track'>
            <div className='container pt-3'> */}

              {/* Title */}
              {/* <Title2 /> */}
              {/* akhir Title */}

              {/* <div className="col-md-3 hr">
              <hr></hr>
              </div> */}

              {/* Track */}
              {/* <Dashboard /> */}
              {/* akhir Track */}
              
            {/* </div>
          </section>
        </div> */}
        {/* Batas HomeWork-7 */}

        <div className='Music2'>
          <section className='track'>
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
          </section>
        </div>

    </div>
  );
}

export default App;
