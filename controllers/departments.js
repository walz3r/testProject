module.exports = {
	getAll : function(req, res, next)
	{
		var Departments = req.models.tbldepartments;

		Departments.find({}, function(err, departments){
			if (err) {
				return next(err);
			} else {
				return res.send(departments);
			}
		});
	},
	getOne: function(req, res, next)
	{
		var dpID = req.params.dpID;
		var Departments = req.models.tbldepartments;

		Departments.get(dpID, function(err, department){
			if (err) {
				return next(err);
			} else {
				return res.send(department);
			}
		});
	},
	insert: function(req, res, next)
	{
		var department = {
			dpName: req.body.dpName
		}
		var Departments = req.models.tbldepartments;

		Departments.create(department, function(err, newDepartment){
			if (err) {
				return next(err);
			} else {
				return res.send(newDepartment);
			}
		});

	},
	update: function(req, res, next)
	{
		var department = {
			dpID: req.body.dpID,
			dpName: req.body.dpName
		}
		var Departments = req.models.tbldepartments;

		Departments.get(department.dpID, function(err, foundDepartment){

			if (err) {
				return next(err);
			} else {

				foundDepartment.dpName = department.dpName;

				foundDepartment.save(function(err){

				if (err) {
					return next(err);
				} else {
					return res.send(foundDepartment);
				}

				})
			}
		});
	},
	remove: function(req, res, next)
	{
		var department = {
			dpID: req.body.dpID
		}
		var Departments = req.models.tbldepartments;

		Departments.find({ "dpID" : department.dpID }).remove(function(err, result){
			if (err) {
				return next(err);
			} else {
				return res.send(result);
			}
		});
	}
}