import React, { Component } from 'react';
import './assets/css/styles.scss';

import Header from './components/Header';
import Footer from './components/Footer';

// Paintings
import P20171009 from './paintings/js/P20171009';
import P20171010 from './paintings/js/P20171010';
import P20171012 from './paintings/js/P20171012';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <section>
          <div className="painting">
            <P20171009 />
          </div>
          <div className="painting">
            <P20171010 />
          </div>
          <div className="painting">
            <P20171012 />
          </div>
        </section>
        <Footer />
      </div>
    );
  }
}

export default App;
