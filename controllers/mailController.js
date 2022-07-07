const nodemailer = require("nodemailer");
const fs = require('fs');
const { promisify } = require('util');
const readFile = promisify(fs.readFile);


const sendMail = async (req,res) => {

    //const file = await fs.readFile('../public/mail.html', 'utf8')
    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true, 
        service: 'Gmail',
        auth: {
            user: 'englishmissirene@gmail.com', 
            pass: 'jabernwakrlskqot', 
        },
    });


    
    console.log(req.body.email);
    let info = await transporter.sendMail({
        from: '"App-Etite!" <service@app-ettite.com>', // sender address
        to: req.body.email, // list of receivers
        subject: "Recupero de contraseña", // Subject line
        html: await readFile('./public/mail.html', 'utf8'),
        envelope: {
            from: '"App-Ettite!"', // used as MAIL FROM: address for SMTP
            to: req.body.email
        }
      });

      res.status(200).json({"msg": "funca joya"})

      console.log("Message sent: %s", info.messageId);

      console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    

}

module.exports = {sendMail};