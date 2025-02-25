import Filter from "../function/Filter";
import "../styles/logement.scss";
import "../styles/filter.scss";
export default function Logement() {
  return (
    <>
      <div className="carrousel">
        <img
          id="arrow-left"
          src="./src/assets/logo/arrow-left.png"
          alt="Arrow left"
        ></img>
        <img
          id="picture"
          src="./src/assets/img/card.png"
          alt="Picture article"
        ></img>
        <img
          id="arrow-right"
          src="./src/assets/logo/arrow-right.png"
          alt="Arrow right"
        ></img>
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
            <p>
              Alexandre <br></br> Dumas
            </p>
            <img></img>
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
        <Filter title="Description" content="Inserer text"></Filter>
        <Filter title="Equipements" content="Inserer texte"></Filter>
      </section>
    </>
  );
}
