import React, { Component } from 'react';
import './styles/css/styles.css';

import Header from './components/Header';
import Footer from './components/Footer';

import { paintings } from './paintings/paintings';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="info-bar">
          <p>
            These images were unknowingly inspired by Bruno Munari's &lsquo;useless
            machines&rsquo;, which he describes in length in his wonderful book{' '}
            <em>Design as Art</em>, and which I read after having started work on this project.
          </p>
          <p>In the manner of  Bruno's machines, these CSS paintings serve as a bridge between art and
            functional design by assuming the shape and life of an abstract painting &mdash; their visual characteristics, as well as the interactive
            through some subtle and at times frustrating interactivity &mdash; using the tools and languages of the web.
          </p>
          <p>
            They don't quite push what CSS can do, but I think
            point out some of it's foibles, which is a central theme to much of my work. Most of the images here have a
            &lsquo;sweet spot&rsquo; or two where if you let your mouse sit, they'll take on
            a life of their own. Computers can be and express things of beauty
            too, it turns out.
          </p>
          <p>How paintings are made is very important to me; one of my greatest joys is deconstructing a painting in my mind. 
            While likely not the prettiest code, in the spirit of reading a painting, the source files are found{' '}
            <a href="https://github.com/alightedlamp/CSSART.CLUB/tree/master/src/paintings">here</a>.
          </p>
        </div>
        <section className="paintings">
          {paintings.map((painting, i) => (
            <div className="painting" key={i}>
              {React.createElement(painting.src)}
            </div>
          ))}
        </section>
        <Footer />
      </div>
    );
  }
}

export default App;
