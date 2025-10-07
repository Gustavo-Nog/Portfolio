import SobreMim from '../components/section/SobreMim';
import Projetos from '../components/section/Projetos';
import Contato from '../components/section/Contato';
import Tecnologias from '../components/section/Tecnologias';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


function Portfolio() {

	return (
		<>
			<Navbar />
			<h1> Tela do portfolio</h1>
            <SobreMim />
            <Projetos />
            <Contato />
			<Footer />
		</>
	);

}

export default Portfolio;