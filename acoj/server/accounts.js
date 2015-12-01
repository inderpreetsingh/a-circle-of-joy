Meteor.startup(function () {
  Accounts.config({sendVerificationEmail: true, forbidClientAccountCreation: false});
  process.env.MAIL_URL = 'smtp://singhs.ishwer@gmail.com:Ekpp772HJFTK67YaJXYtdw@smtp.mandrillapp.com:587/';
  var roles = ['admin', 'coach', 'normal']

  // this will fail if the roles package isn't installed
  if(Meteor.roles.find().count() === 0) {
    roles.map(function(role) {
      Roles.createRole(role);
    });
  }

  Accounts.onCreateUser(function(options, user) {
    pro = Profiles.insert({
      user_id: user._id,
      createdAt: new Date(),
      email: user.emails[0].address,
      name: user.username
    });
    console.log(pro);
    if (user._id == 1 ) {
      Roles.addUsersToRoles(user._id, ['admin'],Roles.GLOBAL_GROUP)
    } else {
      Roles.addUsersToRoles(user._id, ['user'],Roles.GLOBAL_GROUP)
    }
    return user;
  });
});
