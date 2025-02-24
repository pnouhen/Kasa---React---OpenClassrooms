import "../styles/filter.scss";
import DropDown from "../function/Dropdown";
export default function APropos() {
  DropDown()
  return (
    <>
      <article className="filter">
        <div className="name">
          <h2>Fiabilité</h2>
          <i className="fa-solid fa-chevron-up"></i>
        </div>
        <p>
          Les annonces postées sur Kasa garantissent une fiabilité totale. Les
          photos sont conformes aux logements, et toutes les informations sont
          régulièrement vérifiées par nos équipes.
        </p>
      </article>
      <article>
        <div className="filter">
          <h2>Respect</h2>
          <i className="fa-solid fa-chevron-up"></i>
        </div>
        <p>
          La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
          comportement discriminatoire ou de perturbation du voisinage
          entraînera une exclusion de notre plateforme.
        </p>
      </article>
      <article>
        <div className="filter">
          <h2>Service</h2>
          <i className="fa-solid fa-chevron-up"></i>
        </div>
        <p>
          Nos équipes se tiennent à votre disposition pour vous fournir une
          expérience parfaite. N&apos;hésitez pas à nous contacter si vous avez
          la moindre question.
        </p>
      </article>
      <article>
        <div className="filter">
          <h2>Sécurité</h2>
          <i className="fa-solid fa-chevron-up"></i>
        </div>
        <p>
          La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que
          pour les voyageurs, chaque logement correspond aux critères de
          sécurité établis par nos services. En laissant une note aussi bien à
          l&apos;hôte qu&apos;au locataire, cela permet à nos équipes de
          vérifier que les standards sont bien respectés. Nous organisons
          également des ateliers sur la sécurité domestique pour nos hôtes.
        </p>
      </article>
    </>
  );
}
