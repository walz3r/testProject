
testApp.factory('$departmentService', function($http) {
  var $departmentService = {
    getAll: function() {
  
      var promise = $http.get('/api/departments/getAll').then(function (response) {
        return response.data;
      });

      return promise;
    }
  };
  return $departmentService;
});