import React from "react";

const Header = ({ score, bestScore }) => {
  return (
    <div className="bg-CustomBlack-500 hover:cursor-default">
      <div className="container  mx-auto p-4 text-CustomWhite-600 flex flex-col items-center md:justify-between  md:flex-row">
        <h1 className="font-bold text-3xl pb-4 text-center md:pb-0 md:text-left md:text-4xl lg:text-5xl">
          Memory Card
        </h1>
        <p className="py-2 text-center text-CustomWhite-500 md:py-0 md:text-xl">
          Hint: Don't choose the{" "}
          <span className="font-bold"> same card twice</span>
        </p>
        <div className="py-2 md:py-0 font-bold flex flex-col gap-2">
          <p className="text-lg">Score: {score}</p>
          <p className="text-xl">Best Score: {bestScore}</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
