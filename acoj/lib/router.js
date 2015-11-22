FlowRouter.route('/', {
  action: function (params, queryParams) {
    BlazeLayout.render('layout', { main: 'dashboard' });
  },
  name: 'home'
})

FlowRouter.route('/log-in', {
  action: function (params, queryParams) {
    BlazeLayout.render('layout', { main: 'login' });
  },
  name: 'log-in'
})

FlowRouter.route('/sign-up', {
  action: function (params, queryParams) {
    BlazeLayout.render('layout', { main: 'signUp' });
  },
  name: 'sign-up'
})

FlowRouter.route('/forgot-password', {
  action: function (params, queryParams) {
    BlazeLayout.render('layout', { main: 'forgotPassword' });
  },
  name: 'forgot-password'
})

FlowRouter.route('/dashboard', {
  action: function (params, queryParams) {
    BlazeLayout.render('layout', { main: 'dashboard' });
  },
  name: 'dashboard'
})
