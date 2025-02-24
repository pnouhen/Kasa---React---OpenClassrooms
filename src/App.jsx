import "./styles/body.scss";
import Header from "./components/Header.jsx";
// import Banner from "./components/Banner.jsx";
// import Accueil from './components/Accueil.jsx'
// import APropos from "./components/APropos.jsx";
import Logement from "./components/Logement.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <>
      <Header />
      {/* <Banner /> */}
      {/* <Accueil /> */}
      {/* <APropos /> */}
      <Logement />
      <Footer />
    </>
  );
}

export default App;
