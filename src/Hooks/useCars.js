import { useEffect, useState } from "react";

const useCars = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetch("https://car-dealer-server-eosin.vercel.app/cars")
      .then((res) => res.json())
      .then((data) => setCars(data));
  }, [cars]);

  return [cars];
};

export default useCars;
