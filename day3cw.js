// Store values in variables
let studentName = "Rahul";
let correctAnswers = 4;
let wrongAnswers = 1;

// Function to calculate final score
function getFinalScore(name, correct, wrong) {

    // Ternary Operator
    return (name === "Unknown")
        ? "Invalid Student"
        : (correct * 4) - (wrong * 1);
}

// Function Call
let result = getFinalScore(
    studentName,
    correctAnswers,
    wrongAnswers
);

// Print Result
console.log("Final Score:", result);

// Print Type of Result
console.log("Type of Result:", typeof result);