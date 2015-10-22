Package.describe({
  name: 'ishwerdas:ghost',
  version: '0.7.1',
  // Brief, one-line summary of the package.
  summary: 'Well maintained Meteor package for ghost',
  // Author of the package
  author: "Ishwerdas",
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.3');
  api.addFiles(['ghost.js'], 'server', 'client');
  if(api.export) {
    api.export('ghost')
  }
});

Npm.depends({ghost: "0.7.1"});
