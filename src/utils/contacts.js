import { PHONE } from "../consts/contacts";

export const getWhatsappMessage = (service) => {
  const message = `Olá! Gostaria de agendar um serviço${
    service ? ` de ${service}` : ""
  }.`;
  return encodeURIComponent(message);
};

export const IFOOD_LINK =
  "https://www.ifood.com.br/delivery/teresopolis-rj/jaya-culinaria-natural-varzea/ead9bf5e-b4ec-4e8a-b37c-2f1d01a06271";

export const getWhatsappLink = (service) => {
  const message = getWhatsappMessage(service);
  return `https://wa.me/${PHONE}?text=${message}`;
};
