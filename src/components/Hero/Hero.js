import React from 'react';
import './Hero.css';
import Header from './Header/Header';
import Countdown from './Countdown/Countdown';
import Information from './Information/Information';
import SubscribeForm from './SubscribeForm/SubscribeForm';

class Hero extends React.Component {
  componentDidMount() {
    let widthMatch = window.matchMedia('(min-width: 500px)');
    // do not use this animation on mobile, because it laggs too much
    if (widthMatch.matches) {
      window.addEventListener('scroll', this.handleScroll);
    }
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll(event) {
    // do something like call `this.setState`
    // access window.scrollY etc
    const hero = document.getElementsByClassName('container')[0];
    let fade = 1 - window.scrollY / window.innerHeight;
    hero.style.opacity = fade;
  }

  render() {
    return (
      <div className="container">
        <div className="second-hero " />
        <div className="hero " />
        <Header />
        <Information />
        <SubscribeForm />
        <Countdown />
      </div>
    );
  }
}

export default Hero;
