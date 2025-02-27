import Header from "./../Structure/Header.jsx";
import Footer from "./../Structure/Footer.jsx";
import { NavLink } from "react-router-dom";
import "./.././../styles/error404.scss";

export default function Logement() {
  return (
    <>
      <Header />
      <h1>404</h1>
      <p className="descriptionError">
        Oups! La page que vous demandez n&apos;existe pas.
      </p>
      <NavLink to="/Error404">
        Retourner sur la page d’accueil
      </NavLink>
      <Footer />
    </>
  );
}
