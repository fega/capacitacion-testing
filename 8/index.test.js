const assert = require('chai').assert
const sendEmail = require('./index');
const transporter = require('./transporter');


it ('sendMail, envía un test a foo@example', (done)=>{
    const callback = (err, info)=>{
        assert.equal(JSON.parse(info.message).from.address, 'foo@example.com');
        done(err);
    }
    sendEmail(transporter, callback);
});