import React from 'react';
import './Hero.css';
import Header from './Header/Header';
import Countdown from './Countdown/Countdown';
import Information from './Information/Information';
import SubscribeForm from './SubscribeForm/SubscribeForm';

class Hero extends React.Component {
  render() {
    return (
      <div className="hero">
        <Header />
        <Information />
        <SubscribeForm />
        <Countdown />
      </div>
    );
  }
}

export default Hero;
