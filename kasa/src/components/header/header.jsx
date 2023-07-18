import { Link } from 'react-router-dom'
import Logo from './image/Logo.png'



function Header(){
          
    return (
        <header className='header'>
            <img src={Logo} alt="Logo de kasa" />
            <nav className='header__nav'>
                <li>
                    <Link to="/" className='header__acceuil'>Acceuil</Link>
                </li>
                <li>
                    <Link to="/Apropos" className='header__apropos'>À propos</Link>
                </li>
            </nav>
            
        </header>
        
    )
    
        
}

export default Header