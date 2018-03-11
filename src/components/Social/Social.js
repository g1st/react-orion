import React from 'react';
import './Social.css';

class Social extends React.Component {
  render() {
    return (
      <div className="social">
        <h1 className="header__capitalize">Latest tweets</h1>
        <div className="social-icon">
          <i className="fab fa-twitter fa-3x" />
        </div>
        <div className="social-information">
          Lorem ipsum dolor sit amet consectetur{' '}
          <a href="https://github.com/g1st">domain.com</a> via{' '}
          <a href="https://twitter.com/abbd">@you</a> Adipisicing
        </div>
      </div>
    );
  }
}

export default Social;
