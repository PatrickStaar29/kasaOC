// Import de chaque composant dont tu as besoin
import Header from "../components/header/header"
import Footer from "../components/footer/footer"
import Collapse from "../components/collapse/collapse"
import Banner from "../components/banner/banner"
import Imagebanner from "../components/banner/bannerimg/apropos.png"

function Apropos(){
    return (
        <section className="body">
            <Header />
            <main>
                <Banner image={Imagebanner}/>
                <Collapse/>   
            </main> 
            <Footer />
        </section>
    )
}
export default Apropos