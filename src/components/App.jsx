import React, { useEffect, useState } from "react";

import TourMain from "./tourMain";
const url = "https://course-api.com/react-tours-project";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => {
      return tour.id !== id;
    });
    setTours(newTours);
  };

  async function fetchData() {
    setLoading(true);
    try {
      const response = await fetch(url);
      const result = await response.json();
      console.log(result);
      setLoading(false);
      setTours(result);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);
  if (loading) {
    return <div className="loading">Loading...</div>;
  }
  if (tours.length === 0) {
    return (
      <div className="ref">
        <h2>no tours left</h2>
        <button
          className="refresh"
          onClick={() => {
            fetchData();
          }}
        >
          Refresh
        </button>
      </div>
    );
  }

  return (
    <main>
      <TourMain tours={tours} removeTour={removeTour} />
    </main>
  );
};
export default App;
