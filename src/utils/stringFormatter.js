export const formatPhoneNumber = (phone) => {
  if (phone) {
    const formattedPhone = phone.length < 13 ? phone : phone.substring(2);
    if (formattedPhone.length === 10) {
      // Para números fixos (XX) XXXX-XXXX
      return formattedPhone.replace(/(\d{2})(\d{4})(\d{4})/, "($1) $2-$3");
    }
    if (formattedPhone.length === 11) {
      // Para celulares (XX) XXXXX-XXXX
      return formattedPhone.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3");
    }
  }
  return phone;
};
