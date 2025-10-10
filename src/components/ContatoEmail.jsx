import { MdOutlineEmail } from "react-icons/md";
import PropTypes from "prop-types";
import { FaEnvelope } from "react-icons/fa";

export default function ContatoEmail({
  text = "Enviar e-mail",
  email = "gustavopan3g7@gmail.com",
  subject = "Contato via site",
  body = "Olá! Gostaria de falar sobre. ",
  className = "",
}) {
  const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;

  return (
    <a
      href={mailtoUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Abrir cliente de e-mail"
      className={`inline-flex items-center justify-center gap-3 rounded-lg bg-sky-600 px-7 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:bg-sky-700 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 ${className}`}
    >
      <FaEnvelope size={15} aria-hidden="true" />
      <span className="whitespace-nowrap">{text}</span>
    </a>
  );
}

ContatoEmail.propTypes = {
  text: PropTypes.string,
  email: PropTypes.string,
  subject: PropTypes.string,
  body: PropTypes.string,
  className: PropTypes.string,
};