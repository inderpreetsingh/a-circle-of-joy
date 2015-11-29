Template.forgotPassword.events({
  'submit form': function(e,t){
    event.preventDefault();
    var email = $('[name=email]').val();
    if isNotEmpty (email) {
      Accounts.forgotPassword({email:email},function(err){
        if (err) {
          sAlert.error(err.reason);
        } else {
          sAlert.info('Email Sent, Please check your mailbox to reset your password');
        }
      });
    }
    return false;
  }
});
