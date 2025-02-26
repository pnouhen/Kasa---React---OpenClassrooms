import { useState } from "react";
import { NavLink } from "react-router-dom";
import GenerateData from "./GenerateData";
import "./../styles/cards.scss";

export default function Cards() {
  const [data, setData] = useState(null);

  return (
    <section>
      <GenerateData setData={setData} /> {/* Passe setData à GenerateData */}

      {data ? (
        data.map((item) => (
            <NavLink to={`/Logement/${item.id}`} key={item.id}>
            <img src={item.cover} alt={item.title} />
            <h2>{item.title}</h2>
            </NavLink>
        ))
      ) : (
        <div>Chargement...</div> // Affiche "Chargement..." si les données ne sont pas encore disponibles
      )}
    </section>
  );
}

