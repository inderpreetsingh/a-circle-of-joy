
FlowRouter.route('/', {
  action: function (params, queryParams) {
    BlazeLayout.render('layout', { main: 'login' });
  },
  name: 'home'
})
