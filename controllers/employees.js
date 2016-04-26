module.exports = {
	getPagesCount : function(req, res, next)
	{
		var Employees = req.models.tblemployees;

		Employees.count({}, function(err, count){
			if (err) {
				return next(err);
			} else {
				var pagesCount = Math.ceil(count / 7);
				return res.send({ 
					pages : pagesCount
				});
			}
		});
	},
	getByPageNumber: function(req, res, next)
	{
		var Employees = req.models.tblemployees;

		//How many records show on the view
		var recordsPerPage = 7;


		var pageNumber = req.params.pageNumber || 1;
		var skipRecordsCount = --pageNumber * recordsPerPage;
	
		Employees.find({}, recordsPerPage, { offset: skipRecordsCount }, function(err, employees){
			if (err) {
				return next(err);
			} else {
				return res.send(employees);
			}
		});
	},
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