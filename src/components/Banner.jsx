import "../styles/banner.scss"
export default function Accueil() {
  return (
    // Changement de l'image est du texte via JS
    <div className="title">
      <img src="./src/assets/img/accueil.png" alt="Picture accueil" />
      <h1>Chez vous, partout et ailleurs</h1>
    </div>
  );
}
