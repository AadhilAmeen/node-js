// day9hw

const fs = require('fs');
const path = require('path');

// Create a buffer from the sentence
let buffer1 = Buffer.from("Node.js buffers are powerful");

// Write "FAST " at the beginning of the buffer
buffer1.write("FAST ");

// Create another buffer
let buffer2 = Buffer.from(" and flexible!");

// Combine both buffers
let finalBuffer = Buffer.concat([buffer1, buffer2]);

// Convert buffer to readable string
let finalString = finalBuffer.toString();

// Create full file path using global path info
const filePath = path.join(__dirname, 'buffer_output.txt');

// Save to file
fs.writeFileSync(filePath, finalString);

// Log output
console.log("Final Buffer Content:");
console.log(finalString);

console.log("\nFile saved successfully at:");
console.log(filePath);


//day9 hw