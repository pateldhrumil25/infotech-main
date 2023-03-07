var nodemailer = require('nodemailer');
// Configure Email Settings
var transporter = nodemailer.createTransport(
  {
    host: "mail.writespace.co.in",
    port: 465,
    auth: {
      user: "no-reply@writespace.co.in",
      pass: "NoReply#123"
    }
  }
);

/*
transporter.verify(function (error, success) {
  if (error) {
    console.log(error);
  } else {
    console.log("Server is ready to take our messages");
  }
});
// */

//  Function to send email
const sendEmail = async ({name, email, services, phone, budget}) => {
  var serviceStr = ""
  services.map(item => {
    serviceStr += item
    serviceStr += ","
  })
  const content = `
    <p>Name: ${name}</p>
    <p>Email: ${email}</p>
    <p>Phone: ${phone ? phone : ""}</p>
    <p>Budget: ${budget}</p>
    <p>Services: ${serviceStr}</p>
  `
  const mailOptions = { 
      from: "no-reply@writespace.co.in",
      to: 'business.writespace@gmail.com', 
      subject: `Query`,
      html: `${content}`
    };
    try {
      let info = await transporter.sendMail(mailOptions)
      console.log(info)
      return {
        success: true
      }
    }
    catch (err) {
      console.log(err);
      return {
        success: false,
        err: err
      }
    }
}

module.exports = sendEmail