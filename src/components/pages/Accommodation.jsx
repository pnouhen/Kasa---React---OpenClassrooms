import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import GenerateData from "../services/GenerateData";
import Header from "../Structure/Header.jsx";
import Slideshow from "../ui/Slideshow.jsx";
import Filter from "./../Common/Filter.jsx";
import Error404 from "./../pages/Error404.jsx";
import Footer from "../Structure/Footer.jsx";
import "./.././../styles/accommodation.scss";

export default function Accommodation() {
  // To recover the ID
  const { id } = useParams();
  // To stockage data of the accommodation
  const [data, setData] = useState(null);
  // For each change of id
  useEffect(() => {
    if (id) {
      setData(null);
    }
  }, [id]);
  return (
    <>
      <GenerateData setData={setData} />
      {data ? (
        <>
        <Header />
      <Slideshow pictures={data.pictures} />
          <section className="section-accommodation">
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
          <Footer />
        </>
      ) : (
       <Error404></Error404>
      )}
      
    </>
  );
}
