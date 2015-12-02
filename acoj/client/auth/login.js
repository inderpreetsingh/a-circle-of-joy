Template.login.events({

  'submit form': function(event){
    event.preventDefault();
    $('#log-in-btn').attr('disabled', 'disabled');
    var email = trimInput($('[name=email]').val().toLowerCase());
    var password =$('[name=password]').val();

    if (isNotEmpty(email) &&
    isEmail(email) &&
    isNotEmpty(password) &&
    isValidPassword(password)) {
      Meteor.loginWithPassword(email, password, function(error){
        if (error) {
          $('#log-in-btn').removeAttr('disabled');
          sAlert.error(error.reason, {position:'top-right', timeout: 5000});
        } else {
          sAlert.success("You have successfully logged In")
          FlowRouter.go('/dashboard/profile');
        }
      });
    } else {
      $('#log-in-btn').removeAttr('disabled');
    }

    return false;

  }
});
