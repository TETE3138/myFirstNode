module.exports = {
      // mongoUri: 'mongodb://localhost/myFirstNode',
       // or use 
        mongoUri: 'mongodb://admin:password@localhost:27017/testDB1',
       debug: true,
       sessionSecret: 'dev_secret_key',
       google:	{
clientID:	'605342475251-4erp2qq4adp186ubfocvqoj76bnu2tmi.apps.googleusercontent.com',
clientSecret:	'I0VlWg8mGBaV9lX4ZBviEkzr',
callbackURL:	'http://localhost:3000/oauth/google/callback'
}
}