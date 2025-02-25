import "./styles/body.scss";
import Header from "./components/Header.jsx";
// import Accueil from './components/Accueil.jsx'
import APropos from "./components/APropos.jsx";
// import Logement from "./components/Logement.jsx";
// import Error404 from "./components/Error404.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <>
      <Header />
      {/* <Accueil /> */}
      <APropos />
      {/* <Logement /> */}
      {/* <Error404 /> */}
      <Footer />
    </>
  );
}

export default App;
