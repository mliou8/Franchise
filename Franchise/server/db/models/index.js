var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/users');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'mongodb connection error: '));

function checkBox(){
    return [].slice.apply(document.querySelectorAll("input[type=checkbox]"))
           .filter(function(c){ return c.checked; })
           .map(function(c){ return c.value; });
}

var personSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	email: {
		type: String
	},
	password: {
		type: String,
		unique: true
	},
	education: {
		type: String,
		required: true
	},
	investment: {
		type: String,
		required: true
	},
	experience: {
		type: String
	}
})

var Person = mongoose.model('Person', personSchema);

module.exports = {
	Person:Person
};

