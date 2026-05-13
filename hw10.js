
// mergeFiles.js

const fs = require('fs');
const path = require('path');

const introPath = path.join(__dirname, 'intro.txt');
const conclusionPath = path.join(__dirname, 'conclusion.txt');
const outputPath = path.join(__dirname, 'full_report.txt');

let introBuffer = Buffer.alloc(0);
let conclusionBuffer = Buffer.alloc(0);

// Read intro.txt using stream
const introStream = fs.createReadStream(introPath);

introStream.on('data', (chunk) => {
    introBuffer = Buffer.concat([introBuffer, chunk]);
});

introStream.on('end', () => {

    // Read conclusion.txt using stream
    const conclusionStream = fs.createReadStream(conclusionPath);

    conclusionStream.on('data', (chunk) => {
        conclusionBuffer = Buffer.concat([conclusionBuffer, chunk]);
    });

    conclusionStream.on('end', () => {

        // Merge both buffers
        const finalBuffer = Buffer.concat([introBuffer, Buffer.from('\n'), conclusionBuffer]);

        // Create writable stream
        const writeStream = fs.createWriteStream(outputPath);

        // Pipe merged buffer into file
        writeStream.write(finalBuffer);

        writeStream.end();

        writeStream.on('finish', () => {
            console.log('Merging complete!');
            console.log('File saved at:', outputPath);
        });
    });

    conclusionStream.on('error', (err) => {
        console.error('Error reading conclusion.txt:', err);
    });
});

introStream.on('error', (err) => {
    console.error('Error reading intro.txt:', err);
});

