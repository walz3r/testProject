var express = require('express');
var router = express.Router();

var employees = require('../controllers/employees.js');
var departments = require('../controllers/departments.js');

router.get('/employees/getAll', employees.getAll);
router.get('/employees/getOne/:empID', employees.getOne);
router.post('/employees/insert', employees.insert);
router.post('/employees/update', employees.update);
router.post('/employees/remove', employees.remove);

router.get('/departments/getAll', departments.getAll);
router.get('/departments/getOne/:dpID', departments.getOne);
router.post('/departments/insert', departments.insert);
router.post('/departments/update', departments.update);
router.post('/departments/remove', departments.remove);

module.exports = router;