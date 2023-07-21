// Import de chaque composant dont tu as besoin
import Header from "../components/header/header"
import Footer from "../components/footer/footer"
import Banner from "../components/banner/banner"
import Imagebanner from "../components/banner/bannerimg/Home.png"
import Card from "../components/card/card"


function Home(){
    return (
        <>
        {/* <section className="body"> */}
            <Header /> 
            <main>
                <Banner image={Imagebanner} text="Chez vous, partout et ailleurs"/>
                <section className="grid">
                    <Card/>
                </section>
            </main>
            <Footer />
        {/* </section> */}
        </>
    )
}
export default Home