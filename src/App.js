import React, { Component } from 'react';
import './assets/css/styles.css';

import Header from './components/Header';
import Footer from './components/Footer';

// Paintings
import P20171009 from './paintings/20171009/P20171009';
import P20171010 from './paintings/20171010/P20171010';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <section>
          <P20171009 />
          <P20171010 />
        </section>
        <Footer />
      </div>
    );
  }
}

export default App;
