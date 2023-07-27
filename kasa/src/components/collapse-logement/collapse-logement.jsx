import React, { useState } from "react";
import { useParams } from "react-router-dom";
// Assurez-vous que le chemin est correct pour accéder à votre fichier data.js

function Collapselogement( {titre, contenu}) {
  const { id } = useParams();

  
  // Recherchez l'objet correspondant à l'ID dans le tableau Tabl


  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed)
  }

  return (
    <div className="collapse-logement">
        <div className="collapse-logement__titre" onClick={toggleCollapse}>
           <h2>{titre}</h2>
           <span>V</span>
        </div>
        {!isCollapsed && (
        <div className="collapse-logement__contenu">
          {contenu.map((contenu, index) => (
            <h3 key={index}>{contenu}</h3>
          ))}
        </div>)}
    </div>
  )
}

export default Collapselogement;