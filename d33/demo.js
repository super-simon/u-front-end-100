const pruductNameInputElement = document.getElementById("product-name");
const remainingCharsElement = document.getElementById("remaining-chars");

const maxAllowedChars = pruductNameInputElement.maxLength;

function updateRemainingCharacters(event) {
  const enteredText = event.target.value;
  const enteredTextLength = enteredText.length;

  const remainingCharacters = maxAllowedChars - enteredTextLength;

  remainingCharsElement.textContent = remainingCharacters;
  if (remainingCharacters <= 10) {
    remainingCharsElement.classList.add("warning");
    pruductNameInputElement.classList.add("warning");
  } else {
    remainingCharsElement.classList.remove("warning");
    pruductNameInputElement.classList.remove("warning");
  }
}

pruductNameInputElement.addEventListener("input", updateRemainingCharacters);
