import PropTypes from "prop-types";

import "./name.scss";

export default function Name({ data }) {
  return (
    <div className="name">
      {data.host.name.split(" ").map((part, index) => (
        <span key={index}>
          {part}
          {index === 0 ? <br /> : null}
        </span>
      ))}
    </div>
  );
}

Name.propTypes = {
  data: PropTypes.shape({
    host: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
