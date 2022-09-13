import { useEffect, useState } from "react";

const useCars = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/cars")
      .then((res) => res.json())
      .then((data) => setCars(data));
  }, [cars]);

  return [cars];
};

export default useCars;
