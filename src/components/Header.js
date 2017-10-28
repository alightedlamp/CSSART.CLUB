import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div>
        <header className="header">
          <div className="title">
            <div className="letter" id="letter-1">
              C
            </div>
            <div className="letter" id="letter-2">
              S
            </div>
            <div className="letter" id="letter-3">
              S
            </div>
            <div className="spacer" />
            <div className="letter" id="letter-4">
              A
            </div>
            <div className="letter" id="letter-5">
              R
            </div>
            <div className="letter" id="letter-6">
              T
            </div>
            <div className="spacer" />
            <div className="letter" id="letter-12">
              C
            </div>
            <div className="letter" id="letter-13">
              L
            </div>
            <div className="letter" id="letter-14">
              U
            </div>
            <div className="letter" id="letter-15">
              B
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default Header;
