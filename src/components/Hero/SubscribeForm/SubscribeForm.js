import React from 'react';
import './Subscribe.css';

class Subscribe extends React.Component {
  render() {
    return (
      <div className="subscribe">
        <form action="" className="subscribe-form">
          <input className="form-input" type="email" placeholder="Email" />
          <button className="form-button" type="submit">
            Submit
            <div className="button-icon">
              <i className="far fa-paper-plane fa-lg" />
            </div>
          </button>
        </form>
      </div>
    );
  }
}

export default Subscribe;
