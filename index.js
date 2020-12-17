

const express = require('express');
const app = express();

app.get('/smsSend', (req, res) => {
    var accountSid = 'AC7ceffc30e5d05e54230a1156aa298b73'; // Account SID from www.twilio.com/console
    var authToken = '98e09ae10dc0a14c2e70399fe4aa0e14';   // Auth Token from www.twilio.com/console
    
    var twilio = require('twilio');
    var client = new twilio(accountSid, authToken);
    
    client.messages.create({
        body: 'Success ',
        to: '+94761317667',  // Text this number
        from: '+14159939989', // From a valid Twilio number
       
    })
    .then((message) => {
        res.send(`The message was sent by id: ${messsage.to}` );
    });
    
});

app.listen(3000);
