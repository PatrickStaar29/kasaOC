import Header from "../components/header/header"
import Footer from "../components/footer/footer"
import Probl from "../components/404/probl"



function Error(){
    return (
        <section className="body">
            <Header /> 
            <Probl/>
            <Footer />
        </section>
    )
}
export default Error