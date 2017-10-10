import React, { Component } from 'react';

import Header from './components/Header';
import P20171009 from './paintings/20171009/P20171009';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <section
          style={{
            marginTop: '150px'
          }}
        >
          <P20171009 />
        </section>
      </div>
    );
  }
}

export default App;
