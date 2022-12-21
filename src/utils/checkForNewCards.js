export default function checkForNewCard(list, prevChoices) {
  const status = [];

  for (let i = 0; i < list.length; i++) {
    // check if list element already exists in the prevChoices list and adding the result to status array
    // if exists - push(true)
    // else push(false)
    status.push(prevChoices.includes(list[i]));
  }

  // if there any false value in the status array,
  // that new false value represent a new card in the card list
  if (status.includes(false)) return true;
  else return false;
}
