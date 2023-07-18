

function CollapseMenu (){

    return (
        <section>
            <div className="collapse">  
                {data.map((item, i) =>(
                    <div key={i}>
                        <div className="collapse__titre">
                            <h2>{item.titre}</h2>
                            <span>+</span>
                        </div>
                        <div className="collapse__contenu">{item.texte}</div>
                    </div>
                ))}
            </div>
        </section>
    )
}

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

export default CollapseMenu;
