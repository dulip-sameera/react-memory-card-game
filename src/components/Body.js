import React from "react";
import one from "../assets/1.png";

const Body = ({ cards, handleCardClick }) => {
  return (
    <div className="container mx-auto p-10">
      <div>
        <img src={one} alt="" className="w-full h-full" />
      </div>
    </div>
  );
};

export default Body;
