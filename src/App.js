import './App.css';
import Title from './components/title/title'
import Card from './components/card/card.js';
import Waves from './components/waves/waves';
import Looping from './HomeWork6/Home/track';
import Title2 from './HomeWork6/Home/title';
import "bootstrap/dist/css/bootstrap.min.css"
import Login from './Login'
import Dashboard from "./Dashboard"

const code = new URLSearchParams(window.location.search).get("code")

function App() {

  return (
    <div className="App">
      {/* Jumbotron */}
      <section className="jumbotron">
      <div className="container pt-3">

        {/* Header */}
        <Title />
        {/* Akhir Header */}

        <div className="col-md-3">
          <hr></hr>
        </div>
        
        {/* Main */}
          <Card />
        {/* Akhir Main */}

      </div>
      </section>
      {/* Akhir Jumbotron */}

        {/* Footer */}
        <Waves />
        {/* Akhir Footer */}

        {/* Homework-6 */}
        <div className='Music'>
          <section className='track'>
            <div className='container pt-3'>

              {/* Title */}
              <Title2 />
              {/* akhir Title */}

              <div className="col-md-3">
              <hr></hr>
              </div>

              {/* Track */}
                <Looping />
              {/* akhir Track */}

            </div>
          </section>
        </div>
        {/* Batas Homework-6 */}

        {/* HomeWork-7 */}
        <div className='Music'>
          <section className='track'>
            <div className='container pt-3'>

              {/* Title */}
              <Title2 />
              {/* akhir Title */}

              <div className="col-md-3">
              <hr></hr>
              </div>

              {/* Track */}
              code ? <Dashboard code={code} /> : <Login />
              {/* akhir Track */}

            </div>
          </section>
        </div>
        {/* Batas HomeWork-7 */}

    </div>
  );
}

export default App;
