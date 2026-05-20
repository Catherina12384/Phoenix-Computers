const whatsappNumber = "919500288164";

export const whatsappLink = (msg) =>
  `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(msg)}`;