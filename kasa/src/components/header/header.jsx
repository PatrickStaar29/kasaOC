import { Link, useLocation } from 'react-router-dom'
import Logo from './image/Logo.png'



function Header() {
    const location = useLocation()
  
    return (
      <header className="header">
        <Link to="/"><img src={Logo} alt="Logo de kasa" /></Link>
        <nav className="header__nav">
          <li>
            <Link to="/" className={`header__acceuil ${location.pathname === '/' ? 'header__active' : ''}`}>
              Accueil
            </Link>
          </li>
          <li>
            <Link to="/Apropos" className={`header__apropos ${location.pathname === '/Apropos' ? 'header__active' : ''}`}>
              À propos
            </Link>
          </li>
        </nav>
      </header>
    )
  }
  
  export default Header;