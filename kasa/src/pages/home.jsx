// Import de chaque composant dont tu as besoin
import Header from "../components/header/header"
import Footer from "../components/footer/footer"



function Home(){
    return (
        <section className="body">
            <Header /> 
            <Footer />
        </section>
    )
}
export default Home