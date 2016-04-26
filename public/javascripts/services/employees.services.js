
testApp.factory('$employeeService', function($http) {
  var $employeeService = {
    getAll: function() {
  
      var promise = $http.get('/api/employees/getAll').then(function (response) {
        return response.data;
      });

      return promise;
    },
    getPagesCount: function() {

    	var promise = $http.get('/api/employees/getPagesCount').then(function (response) {
        return response.data;
      });

      return promise;
    },
    getByPageNumber: function(page) {
    	
    	var promise = $http.get('/api/employees/getByPageNumber/' + page).then(function (response) {
        return response.data;
      });

      return promise;
    }
  };
  return $employeeService;
});