Template.onlyIfLoggedIn.helpers({
  authInProcess: function() {
    return Meteor.loggingIn();
  },
  canShow: function() {
    return !!Meteor.user();
  }
});

Template.onlyIfLoggedOut.helpers({
  canShow: function() {
    return !Meteor.user();
  },
  deauthInProcess: function() {
    return false;
  }
});
