var express = require('express');
var app = express();
var mongojs = require('mongojs');
var db = mongojs('employeelist', ['employeelist']);
var bodyParser = require('body-parser');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

app.get('/employeelist', function (req, res) {
	console.log("I receieved a GET request");

	db.employeelist.find(function (err, docs) {
		console.log(docs);
		res.json(docs);
	});

});

app.post('/employeelist', function (req,res) {
	console.log(req.body);
	db.employeelist.insert({firstname: req.body.firstname, lastname: req.body.lastname, department: req.body.department, phonenumber: req.body.phonenumber, email: req.body.email}, function(err,doc) {
		res.json(doc);
	});
});

app.delete('/employeelist/:id', function (req,res) {
	var id = req.params.id;
	console.log(id);
	db.employeelist.remove({_id: mongojs.ObjectId(id)}, function (err, doc){
		res.json(doc);
	});
});

app.get('employeelist/:id', function (req, res) {
	var id = req.params.id;
	console.log(id);
	db.employeelist.findOne({_id: mongojs.ObjectId(id)}, function (err, doc){
		res.json(doc);
	});
});

app.put('/employeelist/:id', function (req, res) {
	var id = req.params.id;
	console.log(req.body.firstname);
	db.employeelist.findAndModify({
		query: {_id: mongojs.ObjectId(id)},
		update: {$set: {firstname: req.body.firstname, lastname: req.body.lastname, department: req.body.department, phonenumber: req.body.phonenumber, email: req.body.email }},
		new: true}, function (err, doc) {
			res.json(doc);
		}
);

});

app.listen(3000);
console.log("server running on port 3000");