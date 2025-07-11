// src/components/Contact.jsx
import React from 'react';
import '../styles/Contact.scss';

function Contact() {
    return (
        <section id="contact" className="contact-section">
            <h2>Contact</h2>
            <p>If you'd like to collaborate or just say hello, feel free to reach out!</p>
            <a href="mailto:linia-design@gmail.com" className="button button--contac" target="_blank" rel="noopener noreferrer">
                Send me an email
            </a>
        </section>
    );
}

export default Contact;
