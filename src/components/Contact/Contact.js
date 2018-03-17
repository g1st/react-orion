import React from 'react';
import './Contact.css';
import Map from './Map/Map';
import ContactForm from './ContactForm/ContactForm';

class Contact extends React.Component {
  render() {
    return (
      <div className="contact">
        <h1 className="header__contact">Get in touch</h1>
        <div className="contact-row">
          <Map />
          <ContactForm />
        </div>
      </div>
    );
  }
}

export default Contact;
