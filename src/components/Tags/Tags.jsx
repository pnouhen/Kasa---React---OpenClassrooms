import PropTypes from "prop-types";

import "./tags.scss";

export default function Tags({ data }) {
  return (
    <ul className="tags">
      {data.tags.map((tags, index) => (
        <li key={index}>{tags}</li>
      ))}
    </ul>
  );
}

Tags.propTypes = {
  data: PropTypes.shape({
    tags: PropTypes.string.isRequired,
  }).isRequired,
};
