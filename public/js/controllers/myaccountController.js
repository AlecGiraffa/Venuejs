app.controller('myaccountController',  function($scope,userService) {

	userService.getUser($scope);

});