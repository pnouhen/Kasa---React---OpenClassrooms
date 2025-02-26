import PropTypes from "prop-types";
import {useEffect } from "react";
import "./../styles/cards.scss";

export default function GenerateData({ setData }) {
  useEffect(() => {
    fetch("./../public/data/logement.json")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) =>
        console.error("Erreur lors de la récupération des données :", error)
      );
  }, [setData]);

  return null; 
}
GenerateData.propTypes = {
  setData: PropTypes.string.isRequired,
};
