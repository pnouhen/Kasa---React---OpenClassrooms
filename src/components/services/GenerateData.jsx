import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { PropTypes } from "prop-types";
import "./.././../styles/cards.scss";

export default function GenerateData({ setData }) { 
  // To select the ID to find out the corresponding accommodation
  const { id } = useParams();
// To recover the database
  useEffect(() => {
    fetch("./../public/data/logement.json")
      .then((response) => response.json())
      .then((data) => {
        // To browse the database to recover the accommodation with his id 
        if (id) {
          const selectedAccommodation = data.find(item => item.id === id);
          // Function for generate data => id in Cards, Accommodation and Slideshow
          setData(selectedAccommodation);  
        } else {
          setData(data);
        }
      })
      .catch((error) =>
        console.error("Erreur lors de la récupération des données :", error)
      );
      // Table according to the elements to be modified
  }, [id, setData]); 

  return null; 
}
GenerateData.propTypes = {
  setData: PropTypes.func.isRequired,
};
