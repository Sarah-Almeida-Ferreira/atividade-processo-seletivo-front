// ContactCard.js
import React from 'react';
import PropTypes from 'prop-types';
import './../../styles/components/contactCard.scss';

const ContactCard = ({ title, icon, text, links }) => {
    return (
        <div className="contact-card">
            <h3 className="contact-card__title">{title}</h3>
            <div className="contact-card__icon">{icon}</div>
            {
                links && links.map((link, index) => (
                    <a key={index} href={link.href} target="_blank">{link.text}</a>
                ))
            }
            <p className="contact-card__text" dangerouslySetInnerHTML={{ __html: text }}></p>
        </div>
    );
};

ContactCard.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.element.isRequired,
    text: PropTypes.string.isRequired, // text aceita HTML para incluir <br>
    links: PropTypes.arrayOf(
        PropTypes.shape({
            href: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired
        })
    ),
};

export default ContactCard;
