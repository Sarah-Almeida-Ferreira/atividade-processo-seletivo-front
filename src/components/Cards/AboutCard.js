import React from 'react';
import '../../styles/components/aboutCard.scss';

const AboutCard = ({ icon, title, text }) => {
    return (
        <div className="about-card">
            <div className="about-card__header">
                <div className="about-card__icon" style={{ color: "white" }}>{icon}</div>
                <h3 className="about-card__title">{title}</h3>
            </div>
            <p className="about-card__text">{text}</p>
        </div>
    );
};

export default AboutCard;
