import { useState } from React;

function Navbar() {
    const [responsive, setResponsive] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    
    const links = [
        <a href="#sobre-min">Sobre Mim</a>,
        <a href="#tecnologias">Tecnologias</a>,
        <a href="#projetos">Projetos</a>,
        <a href="#contato">Contato</a>
    ]
    return(
        <div>
            <nav>
                {links.map((link, index) => (
                    <span key={index} style={{ margin: '0 10px' }}>
                        {link}
                    </span>
                ))}
            </nav>
        </div>
    );
}      

export default Navbar;