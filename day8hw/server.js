const express = require('express');
const multer = require('multer');
const nodemailer = require('nodemailer');
const path = require('path');

const app = express();
const PORT = 3000;

// Serve static files
app.use(express.static('public'));

// Configure file storage
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },

    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname);
    }
});

const upload = multer({ storage: storage });

// Email transporter setup
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'your_email@gmail.com',
        pass: 'your_app_password'
    }
});

// Upload route
app.post('/upload', upload.single('supportFile'), (req, res) => {

    // Email options
    const mailOptions = {
        from: 'your_email@gmail.com',
        to: 'admin@example.com',
        subject: 'File Uploaded',
        text: 'A user uploaded a file to the support portal.'
    };

    // Send email
    transporter.sendMail(mailOptions, (error, info) => {

        if (error) {
            console.log(error);
            return res.send('File uploaded but email failed.');
        }

        console.log('Email sent: ' + info.response);
        res.send('File uploaded successfully and email notification sent.');
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});