import { useParams } from "react-router-dom"
import Tabl from "../components/data/data"

import Header from "../components/header/header"
import Footer from "../components/footer/footer"
import Description from "../components/tag/description";
import Equipement from "../components/tag/Equipement";

function Logement(){
    const { id } = useParams(); // Récupérer l'ID à partir des paramètres d'URL

  // Recherchez l'objet correspondant à l'ID dans le tableau Tabl
  const cardData = Tabl.find((item) => item.id === id);

  return (
    <>
        <Header/>
        <div>
          <h2>wawa</h2>
          <img src={cardData.cover} alt="" className="carrousel-test"/>
          <div className="logement">
            <div >
              <h1 className="logement__titre">{cardData.title}</h1>
              <h2 className="logement__location">{cardData.location}</h2>
            </div>
          </div>
          <div>
            <Description/>
            <Equipement/>
          </div>
          
        </div>
        <Footer/>
    </>
  )
}

export default Logement