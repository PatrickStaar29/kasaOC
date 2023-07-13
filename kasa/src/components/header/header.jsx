import Logo from './image/Logo.png'

function Header(){

    return (
        <header className='header'>
            <img src={Logo} alt="Logo de kasa" />
            <nav className='header__nav'>
                <li>
                    <a href="/home.jsx" className='header__acceuil'>Acceuil</a>
                </li>
                <li>
                    <a href="/apropos.jsx" className='header__apropos'>À propos</a>
                </li>
            </nav>
        </header>
        
    )
}

export default Header