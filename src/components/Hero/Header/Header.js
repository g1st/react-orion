import React from 'react';
import './Header.css';

import facebook from '../../../assets/images/facebook.svg';
import twitter from '../../../assets/images/twitter.svg';
import github from '../../../assets/images/github.svg';

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <div className="logo">
          <span className="logo__first-part">ORI</span>
          <span className="logo__second-part">ON</span>
        </div>
        <ul className="social-icons">
          <li>
            <a
              className="social-link"
              href="https://facebook.com/g1st"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="icon" src={facebook} alt="facebook icon" />
            </a>
          </li>
          <li>
            <a
              className="social-link"
              href="https://twitter.com/abbd"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="icon" src={twitter} alt="twitter icon" />
            </a>
          </li>
          <li>
            <a
              className="social-link"
              href="https://github.com/g1st/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="icon" src={github} alt="github icon" />
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Header;
