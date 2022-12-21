import random from "./random.js";

export default function generateCardList(min, max, maxLength) {
  const list = [];

  while (list.length < maxLength) {
    let randomIndex = random(min, max);

    if (!list.includes(randomIndex)) list.push(randomIndex);
  }

  return list;
}
