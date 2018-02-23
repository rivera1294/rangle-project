import PropTypes from "prop-types";
import React from "react";


const Card = ({id, name, email}) => {
  return (
    <div className='grow bg-light-green br3 pa3 ma2 dib'>
      <img role="presention" src={`//robohash.org/${id}?size=200x200`} />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
}

Card.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string
};

export default Card;
