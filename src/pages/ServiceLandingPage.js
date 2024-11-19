import React, { useEffect, useState } from "react";
import LandingImage from "../assets/beautiful-pet-portrait-dog.jpg";
import "../styles/pages/serviceLanding.scss";
import Button from "../components/Buttons/Button";
import { SERVICE_CONTENT } from "../consts/services";
import { useParams } from "react-router-dom";
import { getWhatsappLink } from "../utils/contacts";

const ServiceLandingPage = () => {
  const [content, setContent] = useState({});
  const { id } = useParams();

  useEffect(() => {
    return setContent(SERVICE_CONTENT[id]);
  });

  return (
    <section className="service-landing-page">
      <h1>{content.title}</h1>
      <div className="service-landing-page-content">
        <div className="image">
          <img src={LandingImage} alt="Imagem de pet fofinho" />
        </div>
        <div className="service-landing-page-text">
          <h2>{content.subtitle}</h2>
          {content.content}
          <div className="button-container">
            <Button
              link={getWhatsappLink(content.title)}
              text={"Ir Para o WhatsApp"}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceLandingPage;
