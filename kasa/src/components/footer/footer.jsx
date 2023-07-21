import Logo from "./image/logo.png"

function Footer (){
    return(
        <footer className="footer">
            <img src={Logo} alt="Logo de kasa" />
            <p className="footer_texte">© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}

export default Footer 