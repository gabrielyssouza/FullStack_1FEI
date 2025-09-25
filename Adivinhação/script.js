const guessBtn = document.getElementById("guessBtn");
const guessInput = document.getElementById("guessInput");
const message = document.getElementById("message");
const attemptsDisplay = document.getElementById("attempts");

let secretNumber = 25;
let attempts = 0;

guessBtn.addEventListener("click", () => {
    const guess = Number(guessInput.value);
    attempts++;
    attemptsDisplay.textContent = `Tentativas: ${attempts}`;

    if (guess === secretNumber) {
        message.style.color = "#ff3399";
        message.textContent = "✨ Parabéns! Você acertou! ✨";
    } else if (guess < secretNumber) {
        message.style.color = "red";
        message.textContent = "⬆ O número é maior!";
    } else if (guess > secretNumber) {
        message.style.color = "red";
        message.textContent = "⬇ O número é menor!";
    }

    guessInput.value = "";
    guessInput.focus();
});
