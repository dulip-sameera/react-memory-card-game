import React, { useEffect, useState, useRef } from "react";
import { Header, Body } from "./components";
import { getNewList } from "./utils";

const App = () => {
  const [cards, setCards] = useState([1, 2, 3, 4, 5, 6, 7, 8]);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [choices, setChoices] = useState([]);
  const [gameStatus, setGameStatus] = useState(true);
  const firstRender = useFirstRender();

  const MIN = 0;
  const MAX = 40;
  const CARD_LIST_MAX_LENGTH = 8;

  useEffect(() => {
    if (!firstRender) {
      // sets the score;
      setScore((prevScore) => prevScore + 1);

      // generate new card list
      setCards([...getNewList(choices, MIN, MAX, CARD_LIST_MAX_LENGTH)]);
    }
  }, [firstRender, choices]);

  const handleCardClick = (e) => {
    const choice = e.target.id;

    // if player choose the same card twice "GAME OVER"
    if (choices.includes(choice)) {
      setBestScore((prevBestScore) => {
        setGameStatus(false);
        return score > prevBestScore ? score : prevBestScore;
      });
      // set to -1 because every render after first render useEffect get executed
      setScore(-1);
      setChoices([]);
      setCards([...getNewList([], MIN, MAX, CARD_LIST_MAX_LENGTH)]);
      console.log("Game Over");
      return;
    }
    setGameStatus(true);

    // store the player choice
    setChoices([...choices, choice]);
  };

  return (
    <div className="min-h-screen relative">
      <Header score={score} bestScore={bestScore} gameStatus={gameStatus} />
      <Body cards={cards} handleCardClick={handleCardClick} />
    </div>
  );
};

export default App;

const useFirstRender = () => {
  const firstRender = useRef(true);

  useEffect(() => {
    firstRender.current = false;
  }, []);

  return firstRender.current;
};
