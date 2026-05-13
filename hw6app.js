// app.js

const fs = require('fs');

// Step 1: Create profile.txt
const content = "Name: Riya\nAge: 22\nCity: Mumbai";

fs.writeFileSync('profile.txt', content);

console.log("profile.txt created");

// Step 2: Read file and extract name
const data = fs.readFileSync('profile.txt', 'utf8');

const lines = data.split('\n');
const nameLine = lines[0]; // Name: Riya
const name = nameLine.split(': ')[1];

console.log("Extracted Name:", name);

// Step 3: Verify profile
function verifyProfile(userName) {
    if (userName === "Riya") {
        console.log("Profile verified");
    } else {
        console.log("Invalid profile");
    }
}

verifyProfile(name);

// Step 4: Update file with status
const updatedContent = data + "\nStatus: Active";

fs.writeFileSync('profile.txt', updatedContent);

console.log("Status added to file");

// Step 5: Rename file
fs.renameSync('profile.txt', 'verified_profile.txt');

console.log("File renamed to verified_profile.txt");