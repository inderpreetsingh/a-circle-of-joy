Meteor.publishComposite('Profiles', function () {
  return {
    find: function() {
      return Profiles.find({
        user_id: this.userId
      });
    },
    children: [
      {
        find: function(Profiles) {
          var _id;
          _id = Profiles.picture || null;
          return ProfilePictures.find({
              _id: _id
          });
        }
      },
      {
        find: function(Profiles) {
          var _id;
          _id = Profiles.cover || null;
          return ProfileCovers.find({
              _id: _id
          });
        }
      }
    ]
  };
});

Meteor.publish('ProfilePictures', function() {
  return ProfilePictures.find();
});

Meteor.publish('ProfileCovers', function() {
  return ProfileCovers.find();
});
