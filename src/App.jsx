import "./styles/body.scss";
import Header from "./components/Header.jsx";
// import Accueil from './components/Accueil.jsx'
import Footer from "./components/Footer.jsx";
import APropos from "./components/APropos.jsx";
import Banner from "./components/Banner.jsx";

function App() {
  return (
    <>
      <Header />
      <Banner />
      {/* <Accueil></Accueil> */}
      <APropos />
      <Footer />
    </>
  );
}

export default App;
