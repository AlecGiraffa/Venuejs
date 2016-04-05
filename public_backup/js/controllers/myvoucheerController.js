app.controller('myvoucheerController', function($scope,userService) {
	userService.getVoucheer($scope);

});