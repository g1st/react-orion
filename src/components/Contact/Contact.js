import React from 'react';
import './Contact.css';
import Map from './Map/Map';
import ContactForm from './ContactForm/ContactForm';

class Contact extends React.Component {
  render() {
    return (
      <div className="contact">
        <Map />
        <ContactForm />
      </div>
    );
  }
}

export default Contact;
