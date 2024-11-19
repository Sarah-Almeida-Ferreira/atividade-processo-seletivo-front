import { IoMdChatboxes } from "react-icons/io";
import React from "react";
import ContactCard from "../components/Cards/ContactCards.js";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";
import "../styles/pages/contact.scss";
import { formatPhoneNumber } from "../utils/stringFormatter.js";
import { INSTAGRAM_LINK, PHONE } from "../consts/contacts.js";
import { getWhatsappLink } from "../utils/contacts.js";

const ContactSection = () => {
  const phone = formatPhoneNumber(PHONE);
  const phoneLinks = [
    {
      href: getWhatsappLink(),
      text: `WhatsApp: ${phone}`,
    },
  ];
  const instagramLinks = [
    {
      href: INSTAGRAM_LINK,
      text: "@clinicaveterinaria.vidaanimal",
    },
  ];

  return (
    <>
      <h2 className="titulo_contato">Nossos Contatos</h2>
      <div className="contact-section">
        <ContactCard
          title="Endereço"
          icon={<FaMapMarkerAlt />}
          text="Av. Elias Yazbek, 606 - Quinhau, <br>Embu das Artes - SP, 06803-000"
        />
        <ContactCard
          title="Contatos"
          icon={<FaPhoneAlt />}
          text={`Telefone: ${phone}`}
          links={phoneLinks}
        />

        <ContactCard
          title="Horário de Funcionamento"
          icon={<FaClock />}
          text="Segunda à Sexta: 9h às 18h<br>Finais de Semana: 9h às 15h"
        />
        <ContactCard
          title="Contatos Sociais"
          icon={<IoMdChatboxes />}
          text="vidaanimal@gmail.com"
          links={instagramLinks}
        />
      </div>
    </>
  );
};

export default ContactSection;
