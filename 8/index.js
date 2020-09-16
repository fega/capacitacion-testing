const nodemailer = require("nodemailer");

module.exports = async function sendEmail(transporter, callback) {
    let info = await transporter.sendMail({
        from: '"Fred Foo 👻" <foo@example.com>', 
        to: "bar@example.com, baz@example.com",
        subject: "Hello ✔",
        text: "Hello world?",
        html: "<b>Hello world?</b>"
    }, callback);
    // callback(null,{message:JSON.stringify({from:{address: {} }})});
}