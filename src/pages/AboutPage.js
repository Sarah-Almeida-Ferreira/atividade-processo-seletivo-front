import React from 'react';
import '../styles/pages/about.scss'; // Estilos para a seção sobre
import SobreImage from '../assets/aboutImage.jpeg';
const Sobre = () => {
    return (
        <section id="sobre" className="sobre">
            <div className="sobre-container">
                <div className="content">
                    <h2>Sobre nós</h2>
                    <p>
                        Somos uma equipe dedicada ao bem-estar e cuidado do seu pet, sempre buscando oferecer o melhor em qualidade e atenção para nossos clientes de quatro patas. Sabemos que cada pet é único e merece um atendimento especial, por isso, nossos serviços são pensados para garantir conforto, segurança e alegria para o seu amigo.

                        Nossa missão é proporcionar uma experiência de cuidado que vá além do básico, sempre com carinho e respeito. Seja no banho e tosa, hospedagem ou transporte, temos uma equipe qualificada e apaixonada pelo que faz, pronta para atender às necessidades do seu pet com o máximo de dedicação.
                    </p>
                </div>
                <div className="image">
                    <img src={SobreImage} alt="about" />
                </div>
            </div>
        </section>
    );
};

export default Sobre;
