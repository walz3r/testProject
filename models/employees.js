module.exports = function(orm, db) {
    var Employees = db.define('tblemployees', {
        empID : {
        	type: 'integer',
        	key: true
        },
        empName: {
            type: 'text'
        },
        empActive: {
        	type: 'boolean'
        },
        emp_dpID: {
        	type: 'integer'
        }

    }, {
        autoFetch: true,
        methods: {},
        validations: {},
        hooks: {
        }
    });
};