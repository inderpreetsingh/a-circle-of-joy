Template.logOut.events({
  'click #logout' : function(event) {
    event.preventDefault();

    Meteor.logout();
    sAlert.success("You have successfully logged out");
  }
});
