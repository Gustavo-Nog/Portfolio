import { Link } from 'react-router-dom';

function Home() {
  
  return (
    <>
      <div>
        <h1 className="text-brandBlue text-4xl bg-black">Tailwind funcionando</h1>
        <p className="text-matrix text-lg underline">Desenvolvedor FullStack</p>
        <div className="mt-4 space-y-2">
          <div className="text-red-500">Classe built-in test (vermelho)</div>
          <div className="text-brand-blue">Classe extend (azul)</div>
          <div className="text-matrix">Classe extend matrix (verde)</div>
        </div>
      </div>
    </>
  );
}
export default Home;