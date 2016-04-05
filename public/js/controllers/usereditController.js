
app.controller('usereditController', function($scope,userService) {

    userService.getUser($scope);
   console.log("222")


});
