import React from "react";
import Card from "./Card";

const CardList = ({ robots }) => {
  const cardsArray = robots.map(
    robot =>
      <Card key={robot.id} name={robot.name} email={robot.email} id={
        robot.id
      } />
  );

  return (
    <div>
      {cardsArray}
    </div>
  );
};



export default CardList