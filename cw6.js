// userProgram.js

const fs = require('fs');

// Create and write to file
fs.writeFile('user.txt', 'Welcome John', (err) => {

    if (err) {
        console.log('Error creating file');
        return;
    }

    console.log('File created successfully');

    // Read file content
    fs.readFile('user.txt', 'utf8', (err, data) => {

        if (err) {
            console.log('Error reading file');
            return;
        }

        console.log('File Content:', data);

        // Function to check username
        function checkUser(content) {

            if (content.includes('John')) {
                console.log('Valid User');
            } else {
                console.log('Unknown User');
            }
        }

        // Call function
        checkUser(data);
    });
});