import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { PropTypes } from "prop-types";
import "./.././../styles/cards.scss";

export default function GenerateData({ setData }) { 
  const { id } = useParams();
  useEffect(() => {
    fetch("./../public/data/logement.json")
      .then((response) => response.json())
      .then((data) => {
        if (id) {
          const selectedLogement = data.find(item => item.id === id);
          setData(selectedLogement);  
        } else {
          setData(data);
        }
      })
      .catch((error) =>
        console.error("Erreur lors de la récupération des données :", error)
      );
  }, [id, setData]); 

  return null; 
}
GenerateData.propTypes = {
  setData: PropTypes.string.isRequired,
};
