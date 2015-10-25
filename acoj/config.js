var path = Meteor.npmRequire('path');

var __dirname = process.env.PWD;

config = {
	development: {
		url: 'http://localhost/blog:1313',

        database: {
		client: 'sqlite3',
		connection: {
			filename: path.join(__dirname, '/public/content/data/ghost-dev.db')
		},
		debug: false
	},

	server: {
		host: '127.0.0.1',
		port: '2368'
	},
	paths: {
		contentPath: path.join(__dirname, '/public/content/')
	}
}

module.exports=config;
