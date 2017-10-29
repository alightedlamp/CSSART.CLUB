import React, { Component } from 'react';
import './assets/css/styles.scss';

import Header from './components/Header';
import Footer from './components/Footer';

import { paintings } from './paintings/paintings';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <section>
          {paintings.map((painting, i) => (
            <div className="painting" key={i}>
              {React.createElement(painting)}
            </div>
          ))}
        </section>
        <Footer />
      </div>
    );
  }
}

export default App;
