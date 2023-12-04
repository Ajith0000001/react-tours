import React, { useState } from "react";

const TourPlan = ({ id, image, name, info, price, removeTour }) => {
  const [read, setRead] = useState(true);
  return (
    <div className="tour-container">
      <div className="tour-image">
        <img src={image} alt={name} />
      </div>
      <footer>
        <div className="info">
          <h3 className="tour-name">{name}</h3>
          <p className="tour-price">{price}$</p>
        </div>
        <p className="tour-info">
          {read ? `${info.substring(0, 200)}` : info}
          <button
            className="btn-show"
            onClick={() => {
              setRead(!read);
            }}
          >
            {read ? "show more" : "show less"}
          </button>
        </p>
      </footer>
      <button className="tour-button" onClick={() => removeTour(id)}>
        Delete
      </button>
    </div>
  );
};
export default TourPlan;
