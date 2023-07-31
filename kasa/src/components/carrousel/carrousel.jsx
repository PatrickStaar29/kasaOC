import { useParams } from "react-router-dom";
import { useState } from 'react'; // Import useState hook
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import Tabl from '../data/data';

function Carrousel() {
    const { id } = useParams();
    const cardData = Tabl.find((item) => item.id === id);

    const [currentPicture, setCurrentPicture] = useState(0);

    // Gestionnaire d'événements pour la flèche "carrousel__left"
    const handleLeftArrowClick = () => {
        setCurrentPicture((prev) => (prev > 0 ? prev - 1 : cardData.pictures.length - 1));
    };

    // Gestionnaire d'événements pour la flèche "carrousel__right"
    const handleRightArrowClick = () => {
        setCurrentPicture((prev) => (prev < cardData.pictures.length - 1 ? prev + 1 : 0));
    };

    const shouldHideIcon = cardData.pictures.length <= 1; // Vérifier si nous avons 1 image ou moins

    return (
        <div className="carrousel">
            <img src={cardData.pictures[currentPicture]} alt="" className="carrousel__banner" />
            {/* Afficher ou masquer l'icône en fonction du nombre d'images */}
            {!shouldHideIcon && (
                <div className="carrousel__icon">
                    <FontAwesomeIcon icon={faChevronLeft} className="carrousel__left" onClick={handleLeftArrowClick} />
                    <FontAwesomeIcon icon={faChevronRight} className="carrousel__right" onClick={handleRightArrowClick} />
                </div>
            )}
        </div>
    );
}

export default Carrousel;
