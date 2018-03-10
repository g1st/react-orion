import React from 'react';
import './Service.css';

class Service extends React.Component {
  render() {
    return (
      <div>
        <h1 className="header__services">Featured services</h1>
        <div className="service-container">
          <div className="left">
            <div className="service">
              {' '}
              <div className="fa-icon">
                <i className="far fa-edit fa-3x" />
              </div>
              <h1 className="header__service--small">UX/UI Design</h1>{' '}
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit,
                beatae, esse, aspernatur, alias odio numquam incidunt
                perspiciatis aliquid voluptate sapiente.
              </p>
            </div>
            <div className="service">
              <div className="fa-icon">
                <i className="far fa-file-code fa-3x" />
              </div>{' '}
              <h1 className="header__service--small">Product Development</h1>{' '}
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit,
                beatae, esse, aspernatur, alias odio numquam incidunt
                perspiciatis aliquid voluptate sapiente.
              </p>
            </div>
          </div>
          <div className="right">
            <div className="service">
              <div className="fa-icon">
                <i className="far fa-handshake fa-3x" />
              </div>{' '}
              <h1 className="header__service--small">Digital Marketing</h1>{' '}
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit,
                beatae, esse, aspernatur, alias odio numquam incidunt
                perspiciatis aliquid voluptate sapiente.
              </p>
            </div>
            <div className="service">
              <div className="fa-icon">
                <i className="far fa-paper-plane fa-3x" />
              </div>{' '}
              <h1 className="header__service--small">Social Advertise</h1>{' '}
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit,
                beatae, esse, aspernatur, alias odio numquam incidunt
                perspiciatis aliquid voluptate sapiente.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Service;
