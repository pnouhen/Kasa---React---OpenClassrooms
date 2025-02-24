import "../styles/logement.scss"
import "../styles/filter.scss";
export default function Logement() {
  return (
    <>
    <div  className="carrousel" >
      <img id="arrow-left" src="./src/assets/logo/arrow-left.png" alt="Arrow left"></img>  
    <img id="picture" src="./src/assets/img/card.png" alt="Picture article"></img>
    <img id="arrow-right" src="./src/assets/logo/arrow-right.png" alt="Arrow right"></img>  
    </div>
      <section>
        <article className="title-tag">
        <h1>Cozy loft on the Canal Saint-Martin </h1>
        <p>Paris, Île-de-France</p>
        <ul>
            <li>Cozy</li>
            <li>Canal</li>
            <li>Paris 10</li>
        </ul>
      </article>
      <article className="host-rating">
        <div className="host">
            <p>Alexandre <br></br> Dumas</p>
            <img>
            </img>
        </div>
        <div className="rating">
        <i id="star-1" className="fa-solid fa-star"></i>
        <i id="star-2" className="fa-solid fa-star"></i>
        <i id="star-3" className="fa-solid fa-star"></i>
        <i id="star-4" className="fa-solid fa-star"></i>
        <i id="star-5" className="fa-solid fa-star"></i>
        </div>
      </article>
      </section>
      <section className="details">
        <article className="filter">
        <div className="name">
          <h2>Description</h2>
          <i className="fa-solid fa-chevron-down"></i>
        </div>
        <p>
          La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
          comportement discriminatoire ou de perturbation du voisinage
          entraînera une exclusion de notre plateforme.
        </p>
      </article>
      <article className="filter">
      <div className="name">
          <h2>Equipements</h2>
          <i className="fa-solid fa-chevron-down"></i>
        </div>
        <p>
          Nos équipes se tiennent à votre disposition pour vous fournir une
          expérience parfaite. N&apos;hésitez pas à nous contacter si vous avez
          la moindre question.
        </p>
      </article>
      </section>
      
    </>
  );
}
