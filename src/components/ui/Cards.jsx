import { NavLink } from "react-router-dom";
import PropTypes from 'prop-types';
import "./.././../styles/cards.scss";

export default function Cards({item}) {
  return (
          <NavLink to={`/logement/${item.id}`} key={item.id}>
            <img src={item.cover} alt={item.title} />
            <h2>{item.title}</h2>
          </NavLink>

  );
}
Cards.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,  
    cover: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};