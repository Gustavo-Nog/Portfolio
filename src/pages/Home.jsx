import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="min-h-screen w-full bg-black flex flex-col items-center justify-center">
      <h1 className="text-brand-blue text-4xl uppercase">Olá, me chamo Gustavo Nogueira</h1>
      <p className="text-matrix text-lg uppercase">Desenvolvedor FullStack</p>
      <Link to="/contato" className="text-white">Contact Me</Link>
    </div>
  );
}

export default Home;