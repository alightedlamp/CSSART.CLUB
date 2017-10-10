import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div>
        <header className="header">
          {/* <div
            style={{
              position: 'absolute',
              width: '100%',
              top: '-20px',
              left: '0',
              height: '100px',
              backgroundColor: 'green',
              transform: 'skew(0, -1deg)',
              backgroundColor: 'black'
            }}
          /> */}
          <h1
            className="title"
            style={{
              textAlign: 'center',
              fontFamily: '"Roboto", sans-serif',
              fontSize: '8em',
              margin: '-75px 0 0 0',
              color: '#eee'
            }}
          >
            CSSART(DOT)CLUB
          </h1>
        </header>
      </div>
    );
  }
}

export default Header;
