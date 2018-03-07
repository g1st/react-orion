import React from 'react';
import './Subscribe.css';

class Subscribe extends React.Component {
  render() {
    return (
      <div className="subscribe">
        <form action="">
          <input className="form-input" type="email" placeholder="Email" />
          <button className="form-button" type="submit">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default Subscribe;
