testApp
.controller('departmentsCtrl', function($departmentService, $scope) {
	$scope.departments = [];
	$departmentService.getAll().then(function(departments){
		$scope.departments = departments;
	});
});