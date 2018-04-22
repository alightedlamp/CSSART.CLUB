import React, { Component } from 'react';
import './styles/css/styles.css';

import Header from './components/Header';
import Footer from './components/Footer';

import { paintings } from './paintings/paintings';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <section className="paintings">
          {paintings.map((painting, i) => (
            <div className="painting" key={i}>
              {React.createElement(painting.src)}
            </div>
          ))}
        </section>
        <Footer />
      </div>
    );
  }
}

export default App;
