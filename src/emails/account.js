const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'vzaichkinwork@gmail.com',
        subject: 'Thanks for joining in!',
        text: `Welcome to the app, ${name}.`,
    });
};

const sendCancellationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'vzaichkinwork@gmail.com',
        subject: 'Good Bye!',
        text: `Be gone, ${name}.`,
    });
};

module.exports = {
    sendWelcomeEmail,
    sendCancellationEmail,
};
