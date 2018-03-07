import React from 'react';
import './App.css';

import Hero from '../Hero/Hero';
import Services from '../Services/Services';
import Social from '../Social/Social';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Hero />
        <Services />
        <Social />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;
