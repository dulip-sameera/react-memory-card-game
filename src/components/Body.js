import React from "react";
import Card from "./Card";

const Body = ({ cards, handleCardClick }) => {
  const availableCards = cards.map((card) => {
    return <Card id={card} handleCardClick={handleCardClick} />;
  });

  return (
    <div className="container mx-auto p-10 flex flex-col gap-10 items-center justify-center  md:grid md:grid-rows-2 md:gap-10 xl:grid-rows-2">
      <div className="flex flex-col gap-10 md:grid md:grid-cols-2 md:gap-10   xl:grid-cols-4">
        {/* Card 1 */}
        {availableCards[0]}

        {/* Card 2 */}
        {availableCards[1]}

        {/* Card 3 */}
        {availableCards[2]}

        {/* Card 4 */}
        {availableCards[3]}
      </div>

      <div className="flex flex-col gap-10 md:grid md:grid-cols-2 md:gap-10 l xl:grid-cols-4">
        {/* Card 5 */}
        {availableCards[4]}

        {/* Card 6 */}
        {availableCards[5]}

        {/* Card 7 */}
        {availableCards[6]}

        {/* Card 8 */}
        {availableCards[7]}
      </div>
    </div>
  );
};

export default Body;
