// server.js

const express = require('express');
const fileUpload = require('express-fileupload');
const nodemailer = require('nodemailer');
const path = require('path');

const app = express();

// Enable file upload
app.use(fileUpload());

// Serve HTML form
app.get('/', (req, res) => {
    res.send(`
        <h2>Upload Document</h2>
        <form action="/upload" method="POST" enctype="multipart/form-data">
            <input type="file" name="myFile" required />
            <button type="submit">Upload</button>
        </form>
    `);
});

// Handle file upload
app.post('/upload', async (req, res) => {

    if (!req.files || !req.files.myFile) {
        return res.send('No file uploaded.');
    }

    const uploadedFile = req.files.myFile;

    // File save path
    const uploadPath = path.join(__dirname, 'uploads', uploadedFile.name);

    // Move file to uploads folder
    uploadedFile.mv(uploadPath, async (err) => {

        if (err) {
            return res.status(500).send(err);
        }

        // Email transporter setup
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'yourgmail@gmail.com',
                pass: 'your_app_password'
            }
        });

        // Email details
        const mailOptions = {
            from: 'yourgmail@gmail.com',
            to: 'friend@example.com',
            subject: 'File Upload Notification',
            text: 'A file has been uploaded successfully.'
        };

        // Send email
        transporter.sendMail(mailOptions, (error, info) => {

            if (error) {
                return res.send('File uploaded but email failed.');
            }

            // Success message
            res.send('File uploaded and email sent successfully!');
        });
    });
});

// Start server
app.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});
