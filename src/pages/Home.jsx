import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="h-screen w-full bg-black flex flex-col items-center justify-center">
      <h1 className="text-white text-8xl uppercase text-center">Gustavo Nogueira</h1>
      <p
        className="
          relative
          inline-block
          overflow-hidden
          whitespace-nowrap
          border-r-4 border-white
          pr-5
          text-5xl font-bold text-matrix uppercase
          w-0
          /* combine as duas animações em UMA declaração */
          animate-[typewriter_3.2s_steps(24,end)_forwards,caret_0.8s_step-end_infinite]
        "
        style={{ '--w': '24ch' }} // ajuste para o tamanho do texto
      >
        Desenvolvedor FullStack
      </p>
      <Link to="/portfolio" className="text-white mt-8">Portfolio</Link>
    </div>
  );
}

export default Home;