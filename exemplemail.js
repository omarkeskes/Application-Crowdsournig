
exports.sendMail = function (from){
var helper = require('sendgrid').mail;
var from_email = new helper.Email(from);
var to_email = new helper.Email('admin@crowdsourcing.tn');
var subject = 'Inscription terminée';
var content = new helper.Content('text/plain', 'Hello, Email!');
var mail = new helper.Mail(from_email, subject, to_email, content);

var sg = require('sendgrid')("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");
var request = sg.emptyRequest({
  method: 'POST',
  path: '/v3/mail/send',
  body: mail.toJSON(),
});

sg.API(request, function(error, response) {
  console.log(response.statusCode);
  console.log(response.body);
  console.log(response.headers);
});
}
exports.sendMailto = function (to,text){
var helper = require('sendgrid').mail;
var from_email = new helper.Email(to);
var to_email = new helper.Email('admin@crowdsourcing.tn');
var subject = text;
var content = new helper.Content('text/plain', 'Hello, Email!');
var mail = new helper.Mail(from_email, subject, to_email, content);

var sg = require('sendgrid')("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");
var request = sg.emptyRequest({
  method: 'POST',
  path: '/v3/mail/send',
  body: mail.toJSON(),
});

sg.API(request, function(error, response) {
  console.log(response.statusCode);
  console.log(response.body);
  console.log(response.headers);
});
}