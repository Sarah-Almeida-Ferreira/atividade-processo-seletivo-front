import React from 'react';
import '../styles/pages/home.scss';
import Logo from '../assets/logo.png'; // Ajuste o caminho para o logo
import LandingImage from '../assets/landingImage.png'; // Ajuste o caminho para o logo
import Button from '../components/Buttons/Button';
import { WHATSAPP_LINK } from '../consts/contacts';
const HomePage = () => {
    return (
        <div className="home-page">
            <div className="home-container">
                <div className="image-container">
                    <img src={LandingImage} alt="Home" />
                </div>
                <div className="content-container">
                    <img className="logo" src={Logo} alt="Logo" />
                    <h2>Bem-vindo ao nosso site!</h2>
                    <p>Nosso objetivo é proporcionar o melhor para o seu pet. Confira nossos serviços e mais.</p>
                    <Button link={WHATSAPP_LINK} text={"Ir Para o WhatsApp"} />
                </div>
            </div>
        </div>
    );
};

export default HomePage;
