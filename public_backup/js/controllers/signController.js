app.controller('signController', ['$scope', function($scope, $location) {
	$scope.venueList = [];
	
	$scope.home=function(path)
    {
        $location.path(path);
    }
}]);