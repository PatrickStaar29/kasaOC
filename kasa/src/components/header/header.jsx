import Logo from './image/Logo.png'

function Header(){

    return (
        <header className='header'>
            <img src={Logo} alt="" />
            <nav className='header__nav'>
                <li>
                    <a href="#">Acceuil</a>
                </li>
                <li>
                    <a href="#">À propos</a>
                </li>
            </nav>
        </header>
        
    )
}

export default Header