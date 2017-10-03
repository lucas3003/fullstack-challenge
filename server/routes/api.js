const express = require('express');

const router = express.Router();

employees = {employees: [{name: 'Lucas', lastName: 'Carvalho', participation: 30}]};

router.get('/', (req, res) => {
	res.send(employees);
});

router.post('/', (req, res) => {
	

	if(req.body.name && req.body.lastName && req.body.participation){
		employee = {name: req.body.name, lastName: req.body.lastName, participation: req.body.participation};
		employees.employees.push(employee);

		res.send({success: 'true'})	
	}
	else{
		responseError = {success: 'false', name: 'true', lastName: 'true', participation: 'true'};

		if(!req.body.name)
			responseError.name = 'false';

		if(!req.body.lastName)
			responseError.lastName = 'false';

		if(!req.body.participation)
			responseError.participation = 'false';

		res.send(responseError);
	}

	
});


module.exports = router;