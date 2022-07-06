const nodemailer = require("nodemailer");
const fs = require('fs');
const { promisify } = require('util');
const readFile = promisify(fs.readFile);


const sendMail = async (req,res) => {

    //const file = await fs.readFile('../public/mail.html', 'utf8')
    let transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false, 
        service: 'Ethereal',
        auth: {
            user: 'hillard.nolan62@ethereal.email', 
            pass: 'uJkNEfTT23EaqwsAVW', 
        },
    });


    
    console.log(req.body.email);
    let info = await transporter.sendMail({
        from: 'hillard.nolan62@ethereal.email', // sender address
        to: req.body.email, // list of receivers
        subject: "Recupero de contraseña", // Subject line
        text: "Holitas", //await readFile('./public/mail.html', 'utf8'),
        envelope: {
            from: 'hillard.nolan62@ethereal.email', // used as MAIL FROM: address for SMTP
            to: req.body.email
        }
      });

      res.status(200).json({"msg": "funca joya"})

      console.log("Message sent: %s", info.messageId);

      console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    

}

module.exports = {sendMail};