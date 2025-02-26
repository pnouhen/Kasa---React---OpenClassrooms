import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import GenerateData from "../services/GenerateData";
import PropTypes from "prop-types";
import Header from "../Structure/Header.jsx";
import Filter from "./../Common/Filter.jsx";
import Footer from "../Structure/Footer.jsx";
import "./.././../styles/logement.scss";

export default function Accommodation() {
  // Recuperer l'ID
  const { id } = useParams();
  // Etat pour stocker les données
  const [data, setData] = useState(null);
  useEffect(() => {
    if (id) {
      setData(null);
    }
  }, [id]);
  return (
    <>
      <Header />
      <div className="carrousel"></div>
      {/* <Carrousel /> */}
      <GenerateData setData={setData} />
      {data ? (
        <>
          <section>
            <article className="title-tag">
              <h1>{data.title}</h1>
              <p>{data.location}</p>
              <ul>
                {data.tags.map((tags, index) => (
                  <li key={index}>{tags}</li>
                ))}
              </ul>
            </article>
            <article className="host-rating">
              <div className="host">
                <div className="name">
                  {data.host.name.split(" ").map((part, index) => (
                    <span key={index}>
                      {part}
                      {index === 0 ? <br /> : null}
                    </span>
                  ))}
                </div>
                <img src={data.host.picture}></img>
              </div>
              <div className="rating">
                {[1, 2, 3, 4, 5].map((starIndex) => (
                  <i
                    key={starIndex}
                    className={`fa-solid fa-star ${
                      starIndex <= data.rating ? "active" : ""
                    }`}
                  ></i>
                ))}
              </div>
            </article>
          </section>
          <section className="details">
            <Filter title="Description" content={data.description}></Filter>
            <Filter
              title="Équipements"
              content={data.equipments.map((equipment, index) => (
                <span key={index}>
                  {equipment}
                  <br />
                </span>
              ))}
            />{" "}
          </section>
        </>
      ) : (
        // <section>
        //   <h2>{data.title}</h2>
        //   <p>{data.description}</p>
        //   <ul>
        //     <li>
        //       <strong>Prix:</strong> {data.price} €
        //     </li>
        //     <li>
        //       <strong>Tags:</strong> {data.tags.join(", ")}
        //     </li>
        //     <li>
        //       <strong>Équipements:</strong> {data.equipments.join(", ")}
        //     </li>
        //   </ul>
        // </section>
        <div>Chargement...</div>
      )}
      <Footer />
    </>
  );
}

Accommodation.propTypes = {
  setData: PropTypes.func.isRequired,
};
