//npm install nodemailer

var nodemailer = require('nodemailer');

var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'mymaill@gmail.com',
    pass: 'password'
  }
});

var mailOptions = {
  from: 'mymaill@gmail.com',
  to: 'mymaill@gmail.com',
  subject: 'Hi nesrine',
  text: 'un email de moi vers moi!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
