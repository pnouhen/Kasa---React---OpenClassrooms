import Header from "../Structure/Header.jsx";
import Banner from "../Common/Banner.jsx";
import Cards from "../ui/Cards.jsx";
import Footer from "../Structure/Footer.jsx";

import img from "./.././../assets/img/home.webp";
export default function Home() {
  return (
    <>
      <Header />
      <Banner
        picture={img}
        descriptionPicture="Bannière de l'accueil"
        title="Chez vous, partout et ailleurs"
      ></Banner>
      <Cards />
      <Footer />
    </>
  );
}
