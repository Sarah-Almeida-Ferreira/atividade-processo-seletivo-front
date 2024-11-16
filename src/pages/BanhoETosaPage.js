import React from "react";
import "../styles/pages/banhoETosa.scss";
import Logo from "../assets/logo.png";
import BanhoETosaImage from "../assets/banhoETosaImage.png";
import Button from "../components/Buttons/Button";
import { WHATSAPP_LINK } from "../consts/contacts";

const BanhoETosa = () => {
  return (
    <div className="banho-e-tosa">
      <div className="banho-e-tosa__image">
        <img src={BanhoETosaImage} alt="Banho e tosa" />
      </div>
      <div className="banho-e-tosa__content">
        <h2>Seu pet merece o melhor!</h2>
        <p>
          Agora, em parceria com o Pet Shop, oferecemos serviços de
          <span> Banho e Tosa</span> com todo o cuidado e carinho que o seu
          companheiro merece.
          <br />
          <br />
          Deixe seu pet ainda mais feliz e cheio de estilo! <br />
          <span>Agende agora mesmo pelo WhatsApp </span> <br />e garanta a
          melhor experiência para o seu amigo de quatro patas.
        </p>
        <div>
          <Button link={WHATSAPP_LINK} text={"Ir Para o WhatsApp"} />
        </div>
      </div>
    </div>
  );
};

export default BanhoETosa;
