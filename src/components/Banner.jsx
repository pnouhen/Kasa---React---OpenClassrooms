import PropTypes from "prop-types";
import "../styles/banner.scss"
export default function Banner({picture, descriptionPicture, title}) {
  return (
    <div className="title">
      <img src={picture} alt={descriptionPicture} />
      <h1>{title}</h1>
    </div>
  );
}
Banner.propTypes = {
  picture: PropTypes.string.isRequired,
  descriptionPicture: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};