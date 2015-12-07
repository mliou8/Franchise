var express = require('express')
var router = express.Router();
var models = require('../../db/models/');
var Person = models.Person;
module.exports = router;

router.get('/', function (req, res, next) {
	res.render('newuser.html')

});



router.post('/submit', function (req, res, next) {
		//allows you to post a new page
	    var newPerson = new Person({
	    	name: req.body.name,
	    	email: req.body.email,
	    	password: req.body.password,
	    	education: req.body.education,
	    	investment: req.body.optradio,
	    	experience: req.body.experience
        });
        newPerson.save()
        .then(function (newPerson) {
        	res.send(newPerson)
        }).then(null, function(err) {
        	console.log(err);
        })
});


