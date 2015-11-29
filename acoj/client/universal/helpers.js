var currentUser = Meteor.userId();
Meteor.subscribe('Profiles');
Meteor.subscribe('ProfilePictures');
Meteor.subscribe('ProfileCovers');
Template.registerHelper('currentUser',function() {
  return currentUser;
});

Template.registerHelper('Profile',function() {
  console.log(currentUser);
  p = Profiles.findOne({user_id: currentUser});
  console.log(p);
  return p;
})

Template.registerHelper('showDate', function (date, part){
  console.log(date);
  console.log(part);
  if (part == 'year') {
    return moment(date).format('YYYY');
  } else if (part == 'month') {
    return moment(date).format('MMM');
  } else if (part == 'day') {
    return moment(date).format('Do');
  }
})
