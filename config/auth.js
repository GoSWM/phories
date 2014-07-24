// config/auth.js

// expose our config directly to our application using module.exports
module.exports = {

	'facebookAuth' : {
		'clientID' 		: '936306523053523', // your App ID
		'clientSecret' 	: '3576d11bef4073d3ab73e2a47686507a', // your App Secret
		'callbackURL' 	: 'http://local.host:8080/auth/facebook/callback'
	},

	'twitterAuth' : {
		'consumerKey' 		: 'SEklhj6avw5SvQ6HVkR80ntKu',
		'consumerSecret' 	: 'KLs4Uuy3FAmJvLrUmyzQB6W9iTouLFGTAg0SU9FkdgubwnYqIn',
		'callbackURL' 		: 'http://local.host:8080/auth/twitter/callback'
	},

	'googleAuth' : {
		'clientID' 		: 'your-secret-clientID-here',
		'clientSecret' 	: 'your-client-secret-here',
		'callbackURL' 	: 'http://localhost:8080/auth/google/callback'
	}

};