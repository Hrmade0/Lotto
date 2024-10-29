function getRandomNumbers() {
    let numbers = new Set();
    while (numbers.size < 5) { // In *Baba Ijebu*, 5 numbers are drawn per game
        const randomNumber = Math.floor(Math.random() * 90) + 1;
        numbers.add(randomNumber);
    }
    return Array.from(numbers);
}

function getUserNumbers() {
    const number1 = parseInt(document.getElementById("number1").value.trim());
    const number2 = parseInt(document.getElementById("number2").value.trim());

    return [number1, number2];
}

function getMatches(drawnNumbers, userNumbers) {
    return userNumbers.filter(num => drawnNumbers.includes(num)).length;
}

function playNap2() {
    const userNumbers = getUserNumbers();
    if (userNumbers.includes(NaN) || userNumbers.some(n => n < 1 || n > 90)) {
        alert("Please enter two valid numbers between 1 and 90.");
        return;
    }

    const drawnNumbers = getRandomNumbers();
    const matches = getMatches(drawnNumbers, userNumbers);

    document.getElementById("drawnNumbers").textContent = `Drawn Numbers: ${drawnNumbers.join(", ")}`;
    document.getElementById("matches").textContent = matches > 0 
        ? `You matched ${matches} number(s)!` 
        : "No matches this time. Try again!";
}
