import React, { Component } from 'react';

import Painting from './components/Painting';

class App extends Component {
  render() {
    const username = 'alightedlamp';
    return (
      <div className="App">
        <header className="header">
          <h1 className="title">CSS ART CLUB</h1>
        </header>
        <section className="main-content">
          <Painting />
        </section>
      </div>
    );
  }
}

export default App;
