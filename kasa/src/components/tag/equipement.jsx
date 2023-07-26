import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Tabl from "../data/data"; // Assurez-vous que le chemin est correct pour accéder à votre fichier data.js

function Equipement() {
  const { id } = useParams();

  // Recherchez l'objet correspondant à l'ID dans le tableau Tabl
  const cardData = Tabl.find((item) => item.id === id);

  return (
    <div className="equipement">
        <div className="equipement__titre">
           <h2>Équipements</h2>
           <span>V</span>
        </div>
        <div className="equipement__contenu">
          {cardData.equipments.slice(0).map((equipment, index) => (
          <h3 key={index}>{equipment}</h3>))}
        </div>
    </div>
  );
}

export default Equipement;

