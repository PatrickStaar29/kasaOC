// Import de chaque composant dont tu as besoin
import Header from "../components/header/header"
import Footer from "../components/footer/footer"
import Collapse from "../components/collapse/collapse"
import Banner from "../components/banner/banner"
import Imagebanner from "../components/banner/bannerimg/apropos.png"

function Apropos(){
    const data = [
        {
            titre: 'Fiabilité',
            texte:
                `Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et 
                toutes les information sontrégulièrement vérifiées par nos équipes`
        },
        {
            titre: 'Respect',
            texte:
                `La bienveillance fait partie des valeurs fondatrices de kasa. Tout comportement disciminatoire ou de
                pertubation du voisinage entraînera une exclusion de notre plateforme.`
        },
        {
            titre: 'Service',
            texte:
                `La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de
                pertubation du voisinage entraînera une exclusion de notre plateforme.`
        },
        {
            titre: 'Sécurité',
            texte:
                `La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement
                correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au
                locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons
                également des ateliers sur la sécurité domestique pour nos hôtes.`
        },
    
    ]

    return (
        <>
            <Header />
            <main>
                <Banner image={Imagebanner}/>
                <section className="collapse__apropos">
                    <Collapse titre={data[0].titre} contenu={[data[0].texte]}/>
                    <Collapse titre={data[1].titre} contenu={[data[1].texte]}/>
                    <Collapse titre={data[2].titre} contenu={[data[2].texte]}/>
                    <Collapse titre={data[3].titre} contenu={[data[3].texte]}/>
                </section>
            </main> 
            <Footer />
        </>
    )
}
export default Apropos