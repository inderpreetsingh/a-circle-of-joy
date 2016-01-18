Template.signUp.events({

  'submit form': function(e,t){
    e.preventDefault();
    toggleSpinner("2rem", "show");
    var email = $('[name=email]').val();
    var password = $('[name=password]').val();
    var username = $('[name=username]').val();
    /** validations */
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
          toggleSpinner("2rem","hide");
          NProgress.stop();
          sAlert.error(error.reason);
        } else {
          sAlert.success("Your account has been created!");
          sAlert.info("An email has been sent to your inbox. Verify your email address to continue.", {timeout: 'none'});
          FlowRouter.go("/dashboard/profile/edit");
        }
      });
    } else {
      toggleSpinner("2rem","hide");
    }

    return false;
  }

});
