app.controller('HomeController', ['$scope', 'venueInfo', function($scope, venueInfo) {
	$scope.venueList = venueInfo.getVenueList();

	// use for pagination
    $scope.currentPage = 0;
    $scope.pageSize = 10; 
    $scope.numberOfPages=function(){
        return Math.ceil($scope.venueList.length/$scope.pageSize);                
    };

    
}]);