import PropTypes from "prop-types";
import "./../styles/cards.scss";
import { useState, useEffect } from "react";

export default function GenerateCards() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("./../public/data/logement.json")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Erreur lors de la récupération des données :", error));
  }, []); 

  return (
    <section>
      {data.map((item) => (
        <article key={item.id} className="card">
          <img src={item.cover} alt={item.title} />
          <h2>{item.title}</h2>
        </article>
      ))}
    </section>
  );
}

GenerateCards.propTypes = {
  cover: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
