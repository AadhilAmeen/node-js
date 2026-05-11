var nodemailer = require('nodemailer');

var transport = nodemailer.createTransport({
  host: "sandbox.smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "ba5db4fba6cd82",
    pass: "c3062a586d03f1"
  }
});

var mailOptions = {
  from: 'ba5db4fba6cd82',
  to: '7d599074063ee5',
  subject: 'How to send Email using NodeJS',
  text: 'This is very easy!'
};

transport.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});