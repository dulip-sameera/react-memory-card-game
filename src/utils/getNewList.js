import generateCardList from "./generateCardList.js";
import checkForNewCard from "./checkForNewCards.js";

export default function getNewList(prevChoices, min, max, maxLength) {
  while (true) {
    let cards = generateCardList(min, max, maxLength);
    if (checkForNewCard(cards, prevChoices)) return cards;
  }
}
