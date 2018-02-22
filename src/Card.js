import React from "react";
import PropTypes from "prop-types";

function Card(props) {
  return (
    <div>
      <img role="presention" src="//robohash.org/test?size=200x200" />
      <h2>{props.name}</h2>
      <p>{props.email}</p>
    </div>
  );
}

Card.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string
};

export default Card;
