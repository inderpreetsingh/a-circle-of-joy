Security.defineMethod("ifIsCurrentUser", {
  fetch: ['user_id'],
  transform: null,
  deny: function (type, arg, userId, doc) {
    return userId !== doc.user_id;
  }
});
Profiles.permit(['update']).ifIsCurrentUser().apply();
Security.permit(['insert', 'update', 'download','remove']).collections([ProfilePictures]).apply();
Security.permit(['insert', 'update', 'download','remove']).collections([ProfileCovers]).apply();
