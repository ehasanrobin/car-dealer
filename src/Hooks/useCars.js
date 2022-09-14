import { useEffect, useState } from "react";

const useCars = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetch("https://cryptic-falls-18058.herokuapp.com/cars")
      .then((res) => res.json())
      .then((data) => setCars(data));
  }, [cars]);

  return [cars];
};

export default useCars;
