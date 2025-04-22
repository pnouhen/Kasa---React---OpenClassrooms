import { useState } from "react";
import Header from "../Structure/Header.jsx";
import Banner from "../Common/Banner.jsx";
import GenerateData from "../services/GenerateData";
import Footer from "../Structure/Footer.jsx";
import Cards from "../ui/Cards.jsx"
import img from "./.././../assets/img/home.webp";

export default function Home() {
  const [data, setData] = useState(null);
  return (
    <>
      <Header />
      <Banner
        picture={img}
        descriptionPicture="Bannière de l'accueil"
        title="Chez vous, partout et ailleurs"
      ></Banner>
      <section className="section-cards">
      <GenerateData setData={setData} /> 
      {data ? (
        data.map((item) => (
          <Cards item={item} key={item.id}>
          </Cards>
        ))
      ) : (
        <div className="none">Chargement...</div>
      )}
    </section>
      <Footer />
    </>
  );
}
