import PropTypes from "prop-types";
import "./../styles/cards.scss";

export default function Cards(carrousel, title) {
    return(
        <article>
            <img src={carrousel} alt="" />
            <h2>
                {title}
            </h2>
        </article>
    )
}
Cards.propTypes = {
  carrousel: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};