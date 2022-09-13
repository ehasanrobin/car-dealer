import React from "react";
import Banner from "./Banner/Banner";
import LookingBanner from "./LookingBanner/LookingBanner";
import LowBanner from "./LowBanner/LowBanner";
import NewArrival from "./NewArrival/NewArrival";
import Services from "./Services/Services";

const Home = () => {
  return (
    <>
      <Banner></Banner>
      <LowBanner></LowBanner>
      <Services></Services>
      <LookingBanner></LookingBanner>
      <NewArrival></NewArrival>
    </>
  );
};

export default Home;
