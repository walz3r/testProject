module.exports = {
	getAll : function(req, res, next)
	{
		var Employees = req.models.tblemployees;

		Employees.find({}, function(err, employees){
			if (err) {
				return next(err);
			} else {
				return res.send(employees);
			}
		});
	},
	getOne: function(req, res, next)
	{
		var empID = req.params.empID;
		var Employees = req.models.tblemployees;

		Employees.get(empID, function(err, employee){
			if (err) {
				return next(err);
			} else {
				return res.send(employee);
			}	
		});
	},
	insert: function(req, res, next)
	{
		var employee = {
			empName: req.body.empName,
			empActive: req.body.empActive,
			emp_dpID: req.body.emp_dpID
		}
		var Employees = req.models.tblemployees;

		Employees.create(employee, function(err, newEmployee){
			if (err) {
				return next(err);
			} else {
				return res.send(newEmployee);
			}
		});

	},
	update: function(req, res, next)
	{
		var employee = {
			empID : req.body.empID,
			empName: req.body.empName,
			empActive: req.body.empActive,
			emp_dpID: req.body.emp_dpID
		}

		var Employees = req.models.tblemployees;

		Employees.get(employee.empID, function(err, foundEmployee)
		{
			if (err) {
				return next(err);
			} else {

				foundEmployee.empName = employee.empName;
				foundEmployee.empActive = employee.empActive;
				foundEmployee.emp_dpID = employee.emp_dpID;

				foundEmployee.save(function(err)
				{

				if (err) {
					return next(err);
				} else {
					return res.send(foundEmployee);
				}

				});
			}
		});
	},
	remove: function(req, res, next)
	{
		var employee = {
			empID : req.body.empID,
		}
		var Employees = req.models.tblemployees;

		Employees.find({ "empID" : employee.empID }).remove(function(err, result){
			if (err) {
				return next(err);
			} else {
				return res.send(result);
			}
		});
	}
}