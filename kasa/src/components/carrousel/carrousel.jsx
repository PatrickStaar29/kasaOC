import { useParams } from "react-router-dom"
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import Tabl from '../data/data'

function Carrousel() {
    const { id } = useParams()
    const cardData = Tabl.find((item) => item.id === id)

    const [currentPicture, setCurrentPicture] = useState(0)
    const totalPictures = cardData.pictures.length

    const handleLeftArrowClick = () => {
        setCurrentPicture((prev) => (prev > 0 ? prev - 1 : cardData.pictures.length - 1))
    }

    const handleRightArrowClick = () => {
        setCurrentPicture((prev) => (prev < cardData.pictures.length - 1 ? prev + 1 : 0))
    }

    const shouldHideIcon = totalPictures <= 1

    return (
        <section className="carrousel">
            <img src={cardData.pictures[currentPicture]} alt={cardData.title} className="carrousel__banner" />
            {!shouldHideIcon && (
                <div className="carrousel__icon">
                    <FontAwesomeIcon icon={faChevronLeft} className="carrousel__left" onClick={handleLeftArrowClick} />
                    <FontAwesomeIcon icon={faChevronRight} className="carrousel__right" onClick={handleRightArrowClick} />
                </div>
            )}
            <span className="carrousel__counter">{currentPicture + 1}/{totalPictures}</span>
        </section>
    )
}

export default Carrousel;
