console.log("Лекція 2: Гра 'Вгадати число'");

// Generate a random number between 1 and 100
const randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0; // To count the number of attempts

document.getElementById("guessForm").onsubmit = function (e) {
    e.preventDefault();

    // Get the user's guess
    const guess = parseInt(document.getElementById("guess").value);
    attempts++;

    // Validate the input
    if (isNaN(guess) || guess < 1 || guess > 100) {
        alert("Please enter a valid number between 1 and 100.");
        return;
    }

    // Check the guess and display the result
    let message = "";
    if (guess < randomNumber) {
        message = `Too low! Try again. Attempts: ${attempts}`;
    } else if (guess > randomNumber) {
        message = `Too high! Try again. Attempts: ${attempts}`;
    } else {
        message = `🎉 Congratulations! You guessed it in ${attempts} attempts!`;
        document.getElementById("resetGame").style.display = "inline";
    }

    // Update the result section
    document.getElementById("resultText").textContent = message;
    document.getElementById("result").style.display = "block";

    // Check for maximum attempts
    if (attempts >= 10 && guess !== randomNumber) {
        document.getElementById("resultText").textContent = "Game over! You've used all your attempts.";
        document.getElementById("result").style.display = "block";
        document.getElementById("guessForm").style.display = "none";
        document.getElementById("resetGame").style.display = "inline";
    }
};

document.getElementById("resetGame").onclick = function () {
    location.reload();
};
