Template.signUp.events({
  'submit form': function(e,t){
    event.preventDefault();
    $('#sign-up-btn').attr('disabled', 'disabled');
    var email = $('[name=email]').val();
    var password = $('[name=password]').val();
    var username = $('[name=username]').val();
    if (isNotEmpty(email) &&
    isEmail(email) &&
    isNotEmpty(username) &&
    isNotEmpty(password) &&
    isValidPassword(password)) {
      Accounts.createUser({
        email: email,
        password: password,
        username: username
      }, function (error) {
        if (error) {
            $('#sign-up-btn').removeAttr('disabled');
          sAlert.error(error.reason);
        } else {
          sAlert.success("Your account has been created!");
          sAlert.info("An email has been sent to your inbox. Verify your email address to continue.", {timeout: 'none'})
          FlowRouter.go("/dashboard/profile/edit");
        }
      });
    } else {
      $('#sign-up-btn').removeAttr('disabled');
    }
    return false;
  }
});
