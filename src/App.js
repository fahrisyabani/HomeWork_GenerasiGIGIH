import './App.css';
import Title from './components/title/title'
import Card from './components/card/card.js';
import Waves from './components/waves/waves';
import Looping from './HomeWork6/Home/track';
import Title2 from './HomeWork6/Home/title';
import {useEffect, useState} from 'react';
import axios from 'axios';
import Dashboard from './Pages/Dashboard';



function App() {

//   const CLIENT_ID = "bf66e261daf542b3b87af1424f68e047"
//   const REDIRECT_URI = "http://localhost:3000/"
//   const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
//   const RESPONSE_TYPE = "token"

//   const [token, setToken] = useState("")
//   const [searchKey, setSearchKey] = useState("")
//   const [artists, setArtists] = useState([])

//   useEffect(() => {
//     const hash = window.location.hash
//     let token = window.localStorage.getItem("token")

//     // getToken()


//     if (!token && hash) {
//         token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]

//         window.location.hash = ""
//         window.localStorage.setItem("token", token)
//     }

//     setToken(token)

//   }, [])

//   // Logout
//   const logout = () => {
//     setToken("")
//     window.localStorage.removeItem("token")
//   }

//   // Search
//   const searchArtists = async (e) => {
//     e.preventDefault()
//     const {data} = await axios.get("https://api.spotify.com/v1/search", {
//         headers: {
//             Authorization: `Bearer ${token}`
//         },
//         params: {
//             q: searchKey,
//             type: "artist"
//         }
//     })

//     setArtists(data.artists.items)
//   }

  
//   const renderArtists = () => {
//     return artists.map(artist => (
      
//       <div key={artist.id}>
//       <h3>{artist.name}</h3>
//           {artist.images.length ? <img width={"25%"} src={artist.images[0].url} class="imgSearch" alt="..."/> : <div></div>}
          
//       </div>

            
//     ))
// }


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
        <div className='Music2'>
          <section className='track'>
            <div className='container pt-3'>

              {/* Title */}
              <Title2 />
              {/* akhir Title */}

              <div className="col-md-3 hr">
              <hr></hr>
              </div>

              {/* Track */}

              <Dashboard />

              {/* <div className='search'>
              {!token ?
              
                <button className='btnLogin'>
                <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>Login to Spotify</a>
                </button>
              

              :  <button onClick={logout} type="button" class="btn btn-primary btn-lg">Logout</button>}
              


              {token ?
              <form onSubmit={searchArtists}>
                <input type="text" className='txtInput' onChange={e => setSearchKey(e.target.value)}/>
                <button type="submit" className="btn btn-secondary">Search</button>
              </form>

              : <h2>Please Login</h2>
            }

              {renderArtists()}

              </div> */}
              {/* akhir Track */}
              
            </div>
          </section>
        </div>
        {/* Batas HomeWork-7 */}

    </div>
  );
}

export default App;
