import './App.css';
import Title from './components/title/title.js'
import Card from './components/card/card.js';
import Waves from './components/waves/waves';

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

    </div>
  );
}

export default App;
