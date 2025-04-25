import { useState } from "react";
import PropTypes from 'prop-types';
import "./slideshow.scss";

export default function Slideshow({ pictures }) {
  const [currentIndex, setCurrentIndex] = useState(0); 

  return (
    <>
      {pictures && pictures.length > 0 ? (
        <div className="slideshow">
          <img
            className={pictures.length === 1 ? "arrow-left active" : "arrow-left"}
            src="../src/assets/logo/arrow-left.png"
            alt="Fleche gauche"
            onClick={() =>
                setCurrentIndex((index) => (index - 1 + pictures.length) % pictures.length)} 
          />
          <img
            src={pictures[currentIndex]} 
            alt="Photos du logement"
          />
          <span className={pictures.length === 1 ? "counter active" : "counter"}>
            {currentIndex + 1}/{pictures.length}
          </span>
          <img
            className={pictures.length === 1 ? "arrow-right active" : "arrow-right"}
            src="../src/assets/logo/arrow-right.png"
            alt="Fleche droite"
            onClick={() =>
                setCurrentIndex((index) => (index + 1) % pictures.length)
            }
          />
        </div>
      ) : (
        <div className="none">Chargement...</div>
      )}
    </>
  );
}

Slideshow.propTypes = {
  pictures: PropTypes.arrayOf(PropTypes.string).isRequired,
};