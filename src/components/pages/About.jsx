import Header from "./../Structure/Header.jsx";
import Banner from "./../Common/Banner.jsx";
import Filter from "./../Common/Filter.jsx";
import Footer from "./../Structure/Footer.jsx";
import img from "./.././../assets/img/about.webp";

export default function About() {
  return (
    <>
      <Header />
      <Banner picture={img} descriptionPicture="Bannière de l'A Propos" />
      <Filter
        title="Fiabilité"
        content="Les annonces postées sur Kasa garantissent une fiabilité totale. Les
          photos sont conformes aux logements, et toutes les informations sont
          régulièrement vérifiées par nos équipes."
      />
      <Filter
        title="Respect"
        content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
          comportement discriminatoire ou de perturbation du voisinage
          entraînera une exclusion de notre plateforme."
      />
      <Filter
        title="Service"
        content="Nos équipes se tiennent à votre disposition pour vous fournir une
          expérience parfaite. N'hésitez pas à nous contacter si vous avez
          la moindre question."
      />
      <Filter
        title="Sécurité"
        content="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que
          pour les voyageurs, chaque logement correspond aux critères de
          sécurité établis par nos services. En laissant une note aussi bien à
          l'hôte qu'au locataire, cela permet à nos équipes de
          vérifier que les standards sont bien respectés. Nous organisons
          également des ateliers sur la sécurité domestique pour nos hôtes."
      />
      <Footer />
    </>
  );
}
