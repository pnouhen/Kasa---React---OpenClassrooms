import "../styles/accueil.scss";
import Banner from "./Banner";
import img from "../assets/img/accueil.webp";
export default function Accueil() {
  return (
    <>
      <Banner
        picture={img}
        descriptionPicture="Bannière de l'accueil"
        title="Chez vous, partout et ailleurs"
      ></Banner>
      <section></section>
    </>
  );
}
