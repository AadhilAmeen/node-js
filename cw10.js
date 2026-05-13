// file: bookstore.js

const fs = require("fs");

// Text to write
const content = "Books are a uniquely portable magic.";

// Write to book.txt
fs.writeFile("book.txt", content, (writeErr) => {
  if (writeErr) {
    console.log("Error while writing file:", writeErr);
    return;
  }

  console.log("Writing completed successfully.");

  // Read from book.txt
  fs.readFile("book.txt", "utf8", (readErr, data) => {
    if (readErr) {
      console.log("Error while reading file:", readErr);
      return;
    }

    console.log("Reading completed successfully.");
    console.log("\nFile Content:");
    console.log(data);
  });
});