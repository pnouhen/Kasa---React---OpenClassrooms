import Header from "./Header.jsx";
import Banner from "./Banner";
import GenerateCards from "./Cards.jsx";
import Footer from "./Footer.jsx";

import img from "../assets/img/accueil.webp";
export default function Accueil() {
  return (
    <>
      <Header />
      <Banner
        picture={img}
        descriptionPicture="Bannière de l'accueil"
        title="Chez vous, partout et ailleurs"
      ></Banner>
        <GenerateCards></GenerateCards>
      <Footer />
    </>
  );
}
