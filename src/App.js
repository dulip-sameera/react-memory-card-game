import React from "react";
import { Header, Body } from "./components";

const App = () => {
  const cards = [1, 2, 3, 4, 5, 6, 7, 8];
  const handleCardClick = (e) => console.log(e.target.id);
  return (
    <div className="h-screen">
      <Header score="0" bestScore="0" />
      <Body cards={cards} handleCardClick={handleCardClick} />
    </div>
  );
};

export default App;
