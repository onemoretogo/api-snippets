// Download the Node helper library from twilio.com/docs/node/install
// These vars are your accountSid and authToken from twilio.com/user/account
var accountSid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
var authToken = "your_auth_token";
var client = require('twilio')(accountSid, authToken);

client.sip.ipAccessControlLists("AL32a3c49700934481addd5ce1659f04d2").ipAddresses("IP32a3c49700934481addd5ce1659f04d2").get(function(err, ipAddress) {
    console.log(ipAddress.ipAddress);
});