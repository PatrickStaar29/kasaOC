import Logo from "./image/logo.png"

function Footer (){
    return(
        <footer className="footer">
            <img src={Logo} alt="Logo de kasa" />
            <h2 className="footer_texte">© 2020 Kasa. All rights reserved</h2>
        </footer>
    )
}

export default Footer 