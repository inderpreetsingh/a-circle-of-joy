FlowRouter.route('/', {
  action: function (params, queryParams) {
    FlowRouter.go("/dashboard/profile");
  },
  name: 'home'
});

FlowRouter.route('/log-in', {
  action: function (params, queryParams) {
    BlazeLayout.render('layout', { auth: 'login', main: 'alreadyLoggedIn' });
  },
  name: 'log-in'
});

FlowRouter.route('/sign-up', {
  action: function (params, queryParams) {
    BlazeLayout.render('layout', { auth: 'signUp', main: 'alreadyLoggedIn'  });
  },
  name: 'sign-up'
});

FlowRouter.route('/forgot-password', {
  action: function (params, queryParams) {
    BlazeLayout.render('layout', { auth: 'forgotPassword', main:'forgotPassword' });
  },
  name: 'forgot-password'
});

var dashRoutes = FlowRouter.group({
  prefix: '/dashboard',
  name: 'dashboard'
});

dashRoutes.route('/', {
  action: function() {
    FlowRouter.go("/dashboard/profile/");
  }
});

dashRoutes.route('/profile', {
  action: function() {
    BlazeLayout.render('dashboard', {dash: 'profileCard'})
  }
});

dashRoutes.route('/profile/edit', {
  action: function() {
    BlazeLayout.render('dashboard', {dash: 'profileEditCard'})
  }
});
