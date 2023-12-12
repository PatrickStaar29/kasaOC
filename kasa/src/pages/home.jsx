import Header from "../components/header/header"
import Footer from "../components/footer/footer"
import Banner from "../components/banner/banner"
import Imagebanner from "/image/bannerimg/Home.png"
import Card from "../components/card/card"
import Tabl from "../components/data/data"



function Home(){
    return (
        <>
            <Header /> 
            <main>
                <section className="banner">
                    <Banner image={Imagebanner} text="Chez vous, partout et ailleurs"/>
                </section>
                <section className="grid">
                    {Tabl.map((item) => (
                        <Card key={item.id} data={item} />
                    ))}
                </section>
            </main>
            <Footer />
        </>
    )
}
export default Home