import React from 'react';

const Cards = ({ loading, ships }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <ul className="list-group mb-4">
      {ships.map((ship, ind) => (
        <li
          key={ind}
          className="list-group-item Secondary"
          onClick={(e) => {
            console.log(ship.ship_id);
          }}
        >
          {ship.ship_id}
        </li>
      ))}
    </ul>
  );
};

export default Cards;
