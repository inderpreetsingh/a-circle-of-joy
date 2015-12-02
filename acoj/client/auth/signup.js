Template.signUp.events({
  'submit form': function(e,t){
    event.preventDefault();
    $('')
    var email = $('[name=email]').val();
    var password = $('[name=password]').val();
    var username = $('[name=usernam]').val();
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
          sAlert.error(error.reason);
        } else {
          sAlert.success("Your account has been created!");
          sAlert.info("An email has been sent to your inbox. Verify your email address to continue.", {timeout: 'none'})
          FlowRouter.go("/dashboard/profile/edit");
        }
      });
    }
    return false;
  }
});
