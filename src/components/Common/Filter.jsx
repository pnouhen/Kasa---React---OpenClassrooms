import { useState } from "react";
import PropTypes from "prop-types";
import "./.././../styles/filter.scss";

export default function Filter({ title, content }) {
  const [open, setOpen] = useState(false);

  return (
    <article className="filter">
      <div className="name">
        <h2>{title}</h2>
        <i
          className={
            open ? "rotate fa-solid fa-chevron-up" : "fa-solid fa-chevron-up"
          }
          onClick={() => {
            setOpen(!open);
          }}
        ></i>
      </div>
      <p className={open ? "open" : ""}>{content}</p>
    </article>
  );
}

Filter.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};
