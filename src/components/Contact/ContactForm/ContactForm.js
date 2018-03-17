import React from 'react';
import './ContactForm.css';

class ContactForm extends React.Component {
  render() {
    return (
      <div className="form-container">
        <form className="contact-form" action="">
          <label hidden name="name">
            Name
          </label>
          <input type="text" id="name" placeholder="Your Name" required />
          <label hidden name="email">
            Email
          </label>
          <input type="email" id="email" placeholder="Email Address" required />
          <textarea
            name="message"
            id="form-message"
            rows="3"
            placeholder="Enter Your Message"
          />
          <input type="button" value="Submit" id="form-btn" />
        </form>
      </div>
    );
  }
}

export default ContactForm;
