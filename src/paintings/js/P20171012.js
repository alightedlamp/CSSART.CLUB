import React, { Component } from 'react';
import '../css/20171012.css';

class P20171012 extends Component {
  render() {
    return (
      <div id="P20171012">
        <div className="frame">
          <div className="background">
            <div className="rect" id="rect1" />
            <div className="rect" id="rect2" />
            <div className="rect" id="rect3" />
          </div>
          <div className="middleground">
            <div className="circle" id="circle1" />
            <div className="circle" id="circle2" />
          </div>
          <div className="foreground">
            <div className="rect" id="rect4" />
            <div className="rect" id="rect5" />
            <div className="rect" id="rect6" />
            <div className="rect" id="rect7" />
            <div className="rect" id="rect8" />
            <div className="rect" id="rect9">
              <div className="rect" id="rect10" />
              <div className="rect" id="rect11" />
            </div>
          </div>
        </div>

        <div className="info">2017/10/12</div>
      </div>
    );
  }
}

export default P20171012;
