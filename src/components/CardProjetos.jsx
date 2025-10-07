import projetos from "../data/projeto";
import { Link } from "react-router-dom";

function CardProjetos() {
    return(
        <div>
            {projetos.map((projeto) => (
                projeto.deploy ? (
                    <Link 
                        key={projeto.id} 
                        to={projeto.deploy} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-white"
                    >
                        <div>
                            <h3>{projeto.titulo}</h3>
                            <p>{projeto.descricao}</p>
                        </div>
                    </Link>
                ) : (
                    <Link 
                        key={projeto.id} to={projeto.github} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-white"
                    >
                        <div>
                            <h3>{projeto.titulo}</h3>
                            <p>{projeto.descricao}</p>
                        </div>
                    </Link>
                )
            ))}
        </div>
    );
}


export default CardProjetos;