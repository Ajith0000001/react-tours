import React from "react";
import TourPlan from "./TourPlan";

const tourMain = ({ tours, removeTour }) => {
  return (
    <section>
      <div className="title-pos">
        <h3 className="title">tour places</h3>
        <div className="underline"></div>
      </div>
      <article className="container">
        {tours.map((tour) => {
          return <TourPlan key={tour.id} {...tour} removeTour={removeTour} />;
        })}
      </article>
    </section>
  );
};
export default tourMain;
