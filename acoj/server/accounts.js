Accounts.config({sendVerificationEmail: true, forbidClientAccountCreation: false});
Meteor.startup(function () {
    process.env.MAIL_URL = 'smtp://singhs.ishwer@gmail.com:Ekpp772HJFTK67YaJXYtdw@smtp.mandrillapp.com:587/';
});
