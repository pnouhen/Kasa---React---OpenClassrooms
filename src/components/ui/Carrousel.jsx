import { useState } from "react";
import PropTypes from "prop-types";

export default function Carousel({ pictures }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Fonction pour aller à l'image suivante
  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % pictures.length);
  };

  // Fonction pour aller à l'image précédente
  const goToPrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + pictures.length) % pictures.length
    );
  };

  return (
    <div className="carrousel">
      {/* Flèche gauche */}
      <img
        id="arrow-left"
        src="../src/assets/logo/arrow-left.png"
        alt="Arrow left"
        onClick={goToPrevious} // Quand l'utilisateur clique, va à l'image précédente
      />
      
      {/* Image actuelle du carrousel */}
      <img
        id="picture"
        src={pictures[currentIndex]}
        alt={`Picture ${currentIndex + 1}`}
      />
      
      {/* Flèche droite */}
      <img
        id="arrow-right"
        src="../src/assets/logo/arrow-right.png"
        alt="Arrow right"
        onClick={goToNext} // Quand l'utilisateur clique, va à l'image suivante
      />
    </div>
  );
}
Carousel.propTypes = {
  pictures: PropTypes.string.isRequired,
}
