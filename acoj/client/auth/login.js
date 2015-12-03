Template.login.events({

  'submit form': function(event){
    event.preventDefault();
    toggleSpinner('2rem', 'show'); //client/functions.js
    var email = trimInput($('[name=email]').val().toLowerCase());
    var password =$('[name=password]').val();
    /** validations */
    if (isNotEmpty(email) &&
    isEmail(email) &&
    isNotEmpty(password) &&
    isValidPassword(password)) {
      Meteor.loginWithPassword(email, password, function(error){
        if (error) {
          toggleSpinner('2rem', 'hide');
          sAlert.error(error.reason, {position:'top-right', timeout: 5000});
        } else {
          sAlert.success("You have successfully logged In")
          FlowRouter.go('/dashboard/profile');
        }
      });
    } else {
      toggleSpinner('2rem', 'hide');
    }

    return false;
  }

});
