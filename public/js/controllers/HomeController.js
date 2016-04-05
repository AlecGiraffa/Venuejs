app.controller('HomeController', ['$scope', 'venueInfo', '$location', 'bookService', function($scope, venueInfo, $location, bookService) {
	$scope.venueList = venueInfo.getVenueList();

	// use for pagination
	$scope.currentPage = 0;
	$scope.pageSize = 5; 
	$scope.numberOfPages=function(){
		return Math.ceil($scope.venueList.length/$scope.pageSize);                
	};
	
	$scope.goBooking = function(id) {
		$location.path('book');
	};
    $scope.get = function(id) {
      bookService.venueId = id;
    };
	$scope.placeList = venueInfo.getPlaceList();
	$scope.hotPlace = venueInfo.getHotPlace();
}]);
