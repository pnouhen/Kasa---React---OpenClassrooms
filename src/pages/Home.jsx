import { useEffect, useState } from "react";
import { fetchData } from "../service/FetchData.jsx";
import Header from "../components/Header/Header.jsx";
import Banner from "../components/Banner/Banner.jsx";

import Footer from "../components/Footer/Footer.jsx";
import Cards from "../components/Cards/Cards.jsx"
import img from "../assets/img/home.webp";

export default function Home() {
  const [data, setData] = useState([]);
  const [loading, setLoading]=useState(true)

useEffect(() => {
  fetchData()
      .then(data => setData(data))
      .catch(err => console.error(err))
      .finally(() => setLoading(false));
})

if (loading) return <p>Chargement...</p>

  return (
    <>
      <Header />
      <Banner
        picture={img}
        descriptionPicture="Bannière de l'accueil"
        title="Chez vous, partout et ailleurs"
      ></Banner>
      <section className="section-cards">
      {data.map((item) => (
          <Cards item={item} key={item.id}>
          </Cards>
        ))}
    </section>
      <Footer />
    </>
  );
}
