import { useParams } from "react-router-dom"
import Tabl from "../components/data/data"

import Header from "../components/header/header"
import Footer from "../components/footer/footer"
import Collapselogement from "../components/collapse-logement/collapse-logement";
import Tag from "../components/tag/tag";

function Logement(){
    const { id } = useParams(); // Récupérer l'ID à partir des paramètres d'URL

  // Recherchez l'objet correspondant à l'ID dans le tableau Tabl
  const cardData = Tabl.find((item) => item.id === id);
  const hostData = Tabl.find(item => item.id === id)?.host;


  return (
    <>
        <Header/>
        <div>
          <img src={cardData.cover} alt="" className="carrousel-test"/>
          <div className="logement">
            <div>
              <div >
                <h1 className="logement__titre">{cardData.title}</h1>
                <h2 className="logement__location">{cardData.location}</h2>
              </div>
              <div className="tag">
                {cardData.tags.map((tag, index) =>(
                  <Tag key={index} tag={tag}/>
                ))}
              </div>
            </div>
              <h2>Host: {hostData.name}</h2>
              <img src={hostData.picture} alt={hostData.name} />
            <div>
            </div>
          </div>
          <div className="logement__collapse">
             <Collapselogement titre='Description' contenu={[cardData.description]}/>
             <Collapselogement titre='Équipement' contenu={cardData.equipments}/>
            {/* <Rating stars="4" /> */}
          </div>
        </div>
        <Footer/>
    </>
  )
}

export default Logement