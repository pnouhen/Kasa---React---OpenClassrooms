import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchData } from "../../service/FetchData.jsx";
import Header from "../../components/Header/Header.jsx";
import Slideshow from "../../components/Slideshow/Slideshow.jsx";
import Tags from "../../components/Tags/Tags.jsx";
import Name from "../../components/Name/Name.jsx";
import Filter from "../../components/Filter/Filter.jsx";
import Ratings from "../../components/Ratings/Ratings.jsx";
import Error404 from "../Error404/Error404.jsx";  
import Footer from "../../components/Footer/Footer.jsx";
import "./accommodation.scss";

export default function Accommodation() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    fetchData()
      .then((data) => {
        const accommodation = data.find(item => item.id === id); 
        if (accommodation) {
          setData(accommodation);
        } else {
          setData(null);
        }
      })
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <p>Chargement...</p>;

  if (!data) {
    return <Error404 />;
  }

  return (
    <>
      <Header />
      <Slideshow pictures={data.pictures} />
      <section className="section-accommodation">
        <article className="title-tag">
          <h1>{data.title}</h1>
          <p>{data.location}</p>
          <Tags data={data} />
        </article>
        <article className="host-rating">
          <div className="host">
            <Name data={data} />
            <img src={data.host.picture} alt={data.host.name} />
          </div>
          <Ratings data={data} />
        </article>
      </section>
      <section className="details">
        <Filter title="Description" content={data.description} />
        <Filter
          title="Équipements"
          content={data.equipments.map((equipment, index) => (
            <span key={index}>
              {equipment}
              <br />
            </span>
          ))}
        />
      </section>
      <Footer />
    </>
  );
}
