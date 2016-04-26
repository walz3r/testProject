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
        id: "dpID",
        methods: {},
        validations: {},
        hooks: {
        }
    });

};