import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import "../styles/error404.scss";

export default function Logement() {
  return (
    <>
      <Header />
      <h1>404</h1>
      <p className="descriptionError">Oups! La page que vous demandez n&apos;existe pas.</p>
      <a>Retourner sur la page d’accueil</a>
      <Footer />
    </>
  );
}
