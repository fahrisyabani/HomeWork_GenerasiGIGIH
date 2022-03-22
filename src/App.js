import logo from './logo.svg';
import './App.css';
import img from './assets/1.jpeg';
import song from './assets/JP Saxe .mp3'
import data from './single-sample.js'

import React, { useState, useEffect } from 'react';

function App() {

  // variable dari data api
  // const [data, setData] = useState([])

  // fungsi utk ambil data
  const getDataFromApiAsync = async () => {
    try {
      let response = await fetch('https://gist.githubusercontent.com/aryapradipta9/0b8d0a1a113e3594d34c68c72ec32daf/raw/cb5d20b494bd2cb259d31596b9e8eea02e0f6d1e/single-sample.js')
      let data = await response.json()
      console.log(data)
      return data;
    } catch(error){
      alert(error);
    }
  };

  useEffect(() => {
    getDataFromApiAsync()
  }, []);

  return (
    <div className="App">
      {/* Jumbotron */}
      <section className="jumbotron">
      <div className="container pt-3">
        <div className="row">
          <div className="col-md-3 pb-2">
            <p className="start">Start Playlist Today</p>
            <h1><span>Audio</span> Player for Your <span>Music</span></h1>
          </div>
        </div>

        <div className="col-md-3">
          <hr></hr>
        </div>

        <div className="row mb-3 justify-content-center text-center">
          <div className="col-md-5 mb-4">
            <div className="card border-light">
              <img src={img} width="50" className="card-img-top" alt="JP saxe"/>
              <div className="card-body">
                <h5 className="card-title">
                  <i className="bi bi-music-note"></i>If the World Was Ending (feat.
                  Julia Michaels)
                </h5>
                <p className="card-text py-1">JP Saxe, Julia Michaels</p>
                <p className="card-text-a mt-3 mb-5">
                  Album : Dangerous Levels of Introspection
                </p>
                {/* audio */}
                <audio controls>
                  <source src={song} type="audio/mpeg" />
                </audio>
                {/* akhir audio  */}
              </div>
            </div>
          </div>
        </div>
      </div>
      </section>
      {/* Akhir Jumbotron */}

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path
        fill="whitesmoke"
        fill-opacity="1"
        d="M0,96L40,112C80,128,160,160,240,192C320,224,400,256,480,224C560,192,640,96,720,85.3C800,75,880,149,960,181.3C1040,213,1120,203,1200,213.3C1280,224,1360,256,1400,272L1440,288L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z">
        </path>
      </svg>

      {/* Button homework2 */}
      <section id="Homework2">
        <div class="container pt-2">
          <div class="row text-center">
            <div class="col">
              
              <h2>Click Data</h2>

              <button class="btn btn-primary btn-lg mb-3 mt-4" href="" id="btn_click" role="button" >
                Click
              </button>
            </div>
          </div>
        </div>
      </section>
    {/* akhir Button homework2 */}

      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
