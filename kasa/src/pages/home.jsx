// Import de chaque composant dont tu as besoin
import DireBonjour from "../components/direBonjour/direBonjour"
import Header from "../components/header/header"

function Home(){
    return (
        <section>
                <Header /> 
                <h1 className="test">Page d'accueil</h1>
                <DireBonjour name="Jean-Louis" />
                <p>Comment ça va ?</p>
                <button>Clique moi dessus !</button>
                
            </section>
    )
}
export default Home