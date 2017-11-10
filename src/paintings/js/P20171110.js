import React, { Component } from 'react';
import '../scss/20171110.scss';

class P20171110 extends Component {
  render() {
    return (
      <div id="P20171110">
        <div className="frame">
          <div className="background">
            <div class="rect" id="rect47" />
            <div id="rect-group1">
              {[...Array(15)].map((x, i) => (
                <div className="rect" id={'rect' + (i + 1)} />
              ))}
            </div>
            <div id="circle-group1">
              {[...Array(12)].map((x, i) => (
                <div className="circle" id={'circle' + (i + 1)} />
              ))}
            </div>
          </div>
          <div className="middleground">
            <div id="rect-group2">
              {[...Array(30)].map((x, i) => (
                <div className="rect" id={'rect' + (i + 16)} />
              ))}
            </div>
          </div>
        </div>
        <div className="info">2017/11/10</div>
      </div>
    );
  }
}

export default P20171110;
