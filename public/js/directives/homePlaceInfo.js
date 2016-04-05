app.directive('homePlaceInfo', function() {
	return {
		restrict: 'E',
		scope: {
			info: '='
		},
		templateUrl: 'js/directives/homePlaceInfo.html'
	};
});