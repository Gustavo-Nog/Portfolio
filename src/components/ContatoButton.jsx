import ContatoTelefone from "./ContatoTelefone";
import ContatoEmail from "./ContatoEmail";

export default function Contato({
  telefoneProps = {},
  emailProps = {},
  className = "",
}) {
  return (
    <div className={`flex flex-col sm:flex-row gap-4 ${className}`}>
      <ContatoTelefone {...telefoneProps} />
      <ContatoEmail {...emailProps} />
    </div>
  );
}