import PropTypes from 'prop-types';

import "./ratings.scss"

export default function Ratings({data}) {
  return (
    <div className="ratings">
      {[1, 2, 3, 4, 5].map((starIndex) => (
        <i
          key={starIndex}
          className={`fa-solid fa-star ${
            starIndex <= data.rating ? "active" : ""
          }`}
        ></i>
      ))}
    </div>
  );
}

Ratings.propTypes = {
    data: PropTypes.shape({
      rating: PropTypes.number.isRequired,
    }).isRequired,
  };
