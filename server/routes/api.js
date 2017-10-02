const express = require('express');

const router = express.Router();

employees = {employees: [{name: 'Test', lastName: 'Test', participation: 40}, {name: 'Test2', lastName: 'Test2', participation: 40}]};

router.get('/', (req, res) => {
	//res.send('api works')
	res.send(employees);
});

router.post('/', (req, res) => {
	employee = {name: req.body.name, lastName: req.body.lastName, participation: req.body.participation};
	employees.employees.push(employee);
	res.send({success: 'true'})
});


module.exports = router;