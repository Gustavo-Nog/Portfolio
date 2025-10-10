import PropTypes from "prop-types";
import { FaWhatsapp } from "react-icons/fa";

export default function ContatoTelefone({
  text = "Contate-me",
  telefone = "5588993322436",
  message = "Oi, Gustavo! Vim através do seu site/portfolio e gostaria de solicitar um de seus serviços na área de TI",
  className = "",
}) {
  const onlyDigits = (s) => String(s).replace(/\D/g, "");
  const phoneIntl = onlyDigits(telefone);

  const whatsappUrl = `https://wa.me/${phoneIntl}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Abrir conversa no WhatsApp"
      className={`inline-flex items-center justify-center gap-3 rounded-lg bg-green-700 px-7 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:bg-blue-800 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 ${className}`}
    >
      <FaWhatsapp size={15} aria-hidden="true" />
      <span className="whitespace-nowrap">{text}</span>
    </a>
  );
}

ContatoTelefone.propTypes = {
  text: PropTypes.string,
  telefone: PropTypes.string,
  message: PropTypes.string,
  className: PropTypes.string,
};

