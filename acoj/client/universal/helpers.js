var currentUser = Meteor.userId();
Meteor.subscribe('Profiles');
Meteor.subscribe('ProfilePictures');
Meteor.subscribe('ProfileCovers');
Template.registerHelper('currentUser',function() {
  return currentUser;
});

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
});

Template.registerHelper ('thisProfile', function(){
  thisProfileObj = Profiles.findOne({user_id: Meteor.userId()});
  console.log(thisProfileObj);
  return thisProfileObj;
});

Template.registerHelper('loggedIn', function() {
    return !!Meteor.user();
});
