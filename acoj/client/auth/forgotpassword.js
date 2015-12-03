Template.forgotPassword.events({
  'submit form': function(e,t){
    event.preventDefault();
    toggleSpinner('2rem','show');
    var email = $('[name=email]').val();
    if (isNotEmpty (email)) {
      Accounts.forgotPassword({email:email},function(err){
        if (err) {
          sAlert.error(err.reason);
          toggleSpinner('2rem', 'hide');
        } else {
          sAlert.info('Email Sent, Please check your mailbox to reset your password');
          toggleSpinner('2rem', 'hide');
        }
      });
    } else {
      toggleSpinner('2rem', 'hide');
    }
    return false;
  }
});
