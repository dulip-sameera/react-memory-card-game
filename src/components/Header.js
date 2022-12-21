import React from "react";

const Header = ({ score, bestScore, gameStatus }) => {
  const hint = "Hint: Don't choose the same card twice";
  let gameOverMessage = "Game Over";
  const backgroundColor = gameStatus ? "bg-CustomBlack-500 " : "bg-red-600";

  return (
    <div
      className={`sticky top-0 z-50 ${backgroundColor} hover:cursor-default`}
    >
      <div className="container  mx-auto p-4 text-CustomWhite-600 flex flex-col items-center md:justify-between  md:flex-row">
        <h1 className="font-bold text-3xl pb-4 text-center md:pb-0 md:text-left md:text-4xl lg:text-5xl">
          Memory Card
        </h1>
        <p className="py-2 text-center text-CustomWhite-500 md:py-0 md:text-xl">
          {gameStatus ? hint : gameOverMessage}
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
