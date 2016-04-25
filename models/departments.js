module.exports = function(orm, db) {
    var Departments = db.define('tbldepartments', {
        dpID : {
        	type: 'integer',
            key: true
        },
        dpName: {
            type: 'text'
        }

    }, {
        autoFetch: true,
        methods: {},
        validations: {},
        hooks: {
        }
    });
};