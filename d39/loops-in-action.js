const calclateButton = document.querySelector("#calculator button");

calclateButton.addEventListener("click", () => {
  const userNumber = document.getElementById("user-number");

  let sum = 0;
  for (let i = 0; i <= userNumber.value; i++) {
    sum += i;
  }

  const resultParagraph = document.getElementById("calculated-sum");
  resultParagraph.innerHTML = sum;
  resultParagraph.style.display = "block";
});

const highlightButton = document.querySelector("#highlight-links button");
const links = document.querySelectorAll("#highlight-links a");

highlightButton.addEventListener("click", () => {
  for (const link of links) {
    link.classList.add("highlight");
  }
});

const dummyUserData = {
  firstName: "Oleksandr",
  lastName: "Stetsiuk",
  age: 8,
};

const displayUserDataButton = document.querySelector("#user-data button");
displayUserDataButton.addEventListener("click", () => {
  const outputList = document.getElementById("output-user-data");
  outputList.innerHTML = "";
  for (const key in dummyUserData) {
    const newUserDataListItemElement = document.createElement("li");
    const outputText = key.toUpperCase() + ": " + dummyUserData[key];
    newUserDataListItemElement.textContent = outputText;
    outputList.append(newUserDataListItemElement);
  }
});

const rollButton = document.querySelector("#statistics button");
rollButton.addEventListener("click", () => {
  const diceRolls = document.getElementById("dice-rolls");
  diceRolls.innerHTML = "";
  const userTargetNumber = document.getElementById("user-target-number");
  const targetNumber = userTargetNumber.value;
  const outputTargetNumber = document.getElementById("output-target-number");
  outputTargetNumber.innerHTML = targetNumber;
  let guess;
  let guesses = 0;
  do {
    guesses++;
    guess = Math.round(Math.random() * 5 + 1);
    const newGuessListItem = document.createElement("li");
    newGuessListItem.textContent = guess;
    diceRolls.append(newGuessListItem);
  } while (guess != targetNumber);
  const outputTotalRolls = document.getElementById("output-total-rolls");
  outputTotalRolls.textContent = guesses;
});
