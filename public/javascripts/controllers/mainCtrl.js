testApp
.controller('mainCtrl', function($departmentService, $employeeService, $routeParams, $scope) {
	$scope.page = $routeParams.page || 1;
	$scope.employees = [];
	$scope.pages = [];

    $employeeService.getByPageNumber($scope.page).then(function(response){
    	$scope.employees = response;
    });

	//TODO: Custom paginator with routes
	$employeeService.getPagesCount().then(function(response){
		for (var i = 1; i <= response.pages; i++)
		{
			$scope.pages.push(i);
		}
	});




});