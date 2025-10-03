import { Link } from 'react-router-dom';

function Home() {
  
  return (
    <>
      <div className="bg-black">
        <h1 className="text-brand-blue text-4xl uppercase">Olá, me chamo Gustavo Nogueira</h1>
        <p className="text-matrix text-lg  uppercase">Desenvolvedor FullStack</p>
        <div className="mt-4 space-y-2">
          <div className="text-rsed-500">Classe built-in test (vermelho)</div>
          <div className="text-brand-blue">Classe extend (azul)</div>
          <div className="text-matrix">Classe extend matrix (verde)</div>
        </div>
      </div>
    </>
  );
}
export default Home;