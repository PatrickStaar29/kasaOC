// Import de chaque composant dont tu as besoin
import Header from "../components/header/header"
import Footer from "../components/footer/footer"
import Collapse from "../components/collapse/collapse"

function Apropos(){
    return (
        <section className="body">
            <Header /> 
            <Collapse/>
            <Footer />
        </section>
    )
}
export default Apropos