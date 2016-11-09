var express = require('express');
var router = express.Router();
var nodemailer= require('../correo');

/* GET users listing. */
router.get('/', function(req, res) {
  res.send('respond with a resource');
});

router.post('/', function(req, res){

	console.log("recibi la peticion para envio de email.");
	console.log(req.body);

	// setup e-mail data with unicode symbols
	var mailOptions = {
	    from: req.body.from, // sender address
	    to: req.body.to, // list of receivers
	    subject: req.body.subject, // Subject line
	    text: req.body.text, // plaintext body
	    html: req.body.html // html body
	};

	// send mail.
	nodemailer.sendMail(mailOptions, function(error, info){
	    if(error){
	        return console.log(error);
	        //res.send("error al enviar el email");
	    }
	    else{
		    console.log('Message sent: ' + info.response);
		    //res.send("Message sent :)");
		}
	});

	res.send("Peticion procesada, se intentara enviar el email :)");
});

module.exports = router;