import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

function Home() {
  return (
    <div className="bg-black h-screen w-screen flex flex-col items-center justify-center m-0 p-0">
      <h1 className="text-brand-blue text-4xl uppercase">Olá, me chamo Gustavo Nogueira</h1>
      <p className="text-matrix text-lg uppercase">Desenvolvedor FullStack</p>
      <Link to="/contato">
        Contact Me
      </Link>
    </div>
  );
}

export default Home;