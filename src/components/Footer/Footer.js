import React from 'react';
import './Footer.css';

class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <div className="footer-cont">
          <ul className="footer-icons">
            <li>
              <a
                className="footer-link"
                href="https://facebook.com/g1st"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-lg fa-facebook-f facebook-icon" />
              </a>
            </li>
            <li>
              <a
                className="footer-link"
                href="https://twitter.com/abbd"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-lg fa-twitter twitter-icon" />
              </a>
            </li>
            <li>
              <a
                className="footer-link"
                href="https://github.com/g1st/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-lg fa-github github-icon" />
              </a>
            </li>
          </ul>
          <p>
            {' '}
            &copy; This template was cloned with <i className="fas fa-heart" />{' '}
            by{' '}
            <a href="https://github.com/g1st" rel="noopener noreferrer">
              g1st
            </a>
            &nbsp;from{' '}
            <a
              href="http://www.free-css.com/free-css-templates/page223/orion/"
              target="_blank"
              rel="noopener noreferrer"
            >
              here
            </a>
          </p>
        </div>
      </div>
    );
  }
}

export default Footer;
