import React from "react";
import allImages from "./importImages";
const Card = ({ id, handleCardClick }) => {
  return (
    <div
      className="w-[300px] h-[300px] flex items-center justify-center  bg-CustomBlue-500 rounded-lg duration-500 active:scale-110 active:bg-CustomBlue-100 md:hover:scale-110 md:hover:cursor-pointer md:hover:bg-CustomBlue-100"
      id={id}
      onClick={handleCardClick}
    >
      <img src={allImages[id]} alt="" id={id} />
    </div>
  );
};

export default Card;
