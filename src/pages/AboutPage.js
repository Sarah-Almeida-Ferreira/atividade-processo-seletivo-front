import React from "react";
import "../styles/pages/about.scss"; // Estilos para a seção sobre
import SobreImage from "../assets/aboutImage.jpeg";
import AboutCard from "../components/Cards/AboutCard";
import { FaPaw, FaStethoscope, FaHandHoldingHeart } from "react-icons/fa";
import Button from "../components/Buttons/Button";
import { getWhatsappLink } from "../utils/contacts";

const Sobre = () => {
  return (
    <section id="sobre" className="sobre">
      <div className="sobre__container">
        <div className="content">
          <h2>Sobre nós</h2>
          <p>
            Somos uma equipe dedicada ao bem-estar e cuidado do seu pet, sempre
            buscando oferecer o melhor em qualidade e atenção para nossos
            clientes de quatro patas. Sabemos que cada pet é único e merece um
            atendimento especial, por isso, nossos serviços são pensados para
            garantir conforto, segurança e alegria para o seu amigo. Nossa
            missão é proporcionar uma experiência de cuidado que vá além do
            básico, sempre com carinho e respeito. Seja no banho e tosa,
            hospedagem ou transporte, temos uma equipe qualificada e apaixonada
            pelo que faz, pronta para atender às necessidades do seu pet com o
            máximo de dedicação.
          </p>
          <div className="sobre__descricao">
            <div className="sobre__cards-container">
              <AboutCard
                icon={<FaPaw />}
                title="Fundação e Propósito Inicial"
                text="Criada em 2018, a clínica foi fundada com o objetivo inicial de ser um petshop voltado ao bem-estar e cuidados essenciais dos pets."
              />
              <AboutCard
                icon={<FaStethoscope />}
                title="Mudança de Foco"
                text="Em 2020, percebendo a demanda crescente por serviços veterinários de qualidade, a clínica migrou para o ramo de saúde animal, investindo em infraestrutura e profissionais capacitados."
              />
              <AboutCard
                icon={<FaHandHoldingHeart />}
                title="Compromisso com a Comunidade"
                text="Desde então, a clínica se dedica a oferecer um atendimento acolhedor e acessível, buscando sempre fortalecer o vínculo entre tutores e seus animais, através de cuidados de confiança e qualidade."
              />
              <div className="sobre__cta">
                <h2>Quer saber mais sobre nossos serviços?</h2>
                <p>
                  Entre em contato pelo WhatsApp e fale com nossa equipe!
                  Estamos prontos para ajudar e atender o seu pet com todo o
                  carinho.
                </p>
                <Button link={getWhatsappLink()} text={"Ir Para o WhatsApp"} />
              </div>
            </div>
            <div className="image">
              <img src={SobreImage} alt="about" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sobre;
