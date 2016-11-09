var nodemailer = require('nodemailer');
var crypto = require('crypto'),
    algorithm = 'aes-256-ctr',
    password = 'd6F3Efeq';

var u= "0781c682247e68712440f002fee20c92b04781a6";
var p= "07dec682722168242418f05d";
// create reusable transporter object using the default SMTP transport
var transporter = nodemailer.createTransport('smtps://'+decrypt(u)+'@gmail.com:'+decrypt(p)+'@smtp.gmail.com');

// send mail with defined transport object
function envia(mailOptions, callback){
	transporter.sendMail(mailOptions, callback);
}
function decrypt(text){
  var decipher = crypto.createDecipher(algorithm,password)
  var dec = decipher.update(text,'hex','utf8')
  dec += decipher.final('utf8');
  return dec;
}

module.exports.sendMail=envia;


