import React from 'react';
import './Header.css';

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <div className="logo">
          <span className="logo__first-part">ORI</span>
          <span className="logo__second-part">ON</span>
        </div>
        <div className="header-soc">
          <ul className="header-icons">
            <li>
              <a
                className="header-link"
                href="https://facebook.com/g1st"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-lg fa-facebook-f facebook-icon" />
              </a>
            </li>
            <li>
              <a
                className="header-link"
                href="https://twitter.com/abbd"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-lg fa-twitter twitter-icon" />
              </a>
            </li>
            <li>
              <a
                className="header-link"
                href="https://github.com/g1st/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-lg fa-github github-icon" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Header;
