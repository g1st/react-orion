import React from 'react';
import Waypoint from 'react-waypoint';
import './Service.css';

class Service extends React.Component {
  constructor() {
    super();
    this.state = {
      itemsToReveal: null
    };
  }
  componentDidMount() {
    const itemsToReveal = document.getElementsByClassName('service');
    const itemsToRevealArray = Array.from(itemsToReveal);
    this.setState({ itemsToReveal: itemsToRevealArray });
    // hide initially
    itemsToRevealArray.map(item => item.classList.add('reveal-item'));
  }

  _handleWaypointEnter() {
    let items = this.state.itemsToReveal;
    items.map(item => item.classList.add('reveal-item--is-visible'));
  }

  render() {
    return (
      <div>
        <h1 className="header__services">Featured services</h1>
        <Waypoint
          bottomOffset={'200px'}
          onEnter={() => this._handleWaypointEnter()}
        />
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
