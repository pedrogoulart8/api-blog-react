
//Link é usado para criar links de navegação dentro de um projeto react que utilize react-router-dom. Substitui o <a> do HTML e nao carrega toda a pagina quando é clicado.
import { Link } from 'react-router-dom'

import './Navbar.css'

const Navbar = () => {
    return (

        <nav className='navbar'>
            <h2>
                <Link to={'/api-blog-react/'}>Blog</Link>
            </h2>
            <ul>
                <li>
                    <Link to={'/api-blog-react/'} >Home</Link>
                </li>
                <li>
                    <Link to={'/api-blog-react/new'} className='new-btn'>Novo Post</Link>
                </li>
                <li>
                    < Link to={'/api-blog-react/admin'} >Meu Blog</Link>
                </li>
            </ul>
        </nav>

    )
}

export default Navbar

