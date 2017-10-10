import React, { Component } from 'react';
import './assets/css/styles.css';

import Header from './components/Header';
import P20171009 from './paintings/20171009/P20171009';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <section>
          <P20171009 />
        </section>
      </div>
    );
  }
}

export default App;
