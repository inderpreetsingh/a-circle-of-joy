AutoForm.hooks({
  updateProfileForm: {
    onSuccess: function(operation, result, template) {
      return sAlert.success('Profile updated',{stack:false});
    },
    onError: function(operation, error, template) {
      return sAlert.error(error+"");
    }
  },
  updatePicture: {
    onSuccess: function(operation, result, template) {
      return sAlert.success('Picture Updated');
    },
    onError: function(operation, error, template) {
      return sAlert.error(error);
    }
  }
});

Template.profileEditCard.onRendered(function() {
  sAlert.info("Click or Tap on fields to edit them", {onRouteClose: true});
});
