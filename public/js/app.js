var app = angular.module('venueApp', ['ngRoute', 'ui.bootstrap', 'ui.calendar']);
app.config(function($routeProvider) {
	$routeProvider
	.when('/', {
		controller: 'HomeController',
		templateUrl: 'html/home.html'
	})
	.when('/signin',{
		controller: 'signController',
		templateUrl: 'html/signin.html'
	})
	.when('/signup',{
		controller: 'signController',
		templateUrl: 'html/signup.html'
	})
	.when('/book',{
		controller: 'bookController',
		templateUrl: 'html/book.html'
	})
	.when('/myorder',{
		controller: 'myorderController',
		templateUrl: 'html/myorder.html'
	})
	.when('/myvoucheer',{
		controller: 'myvoucheerController',
		templateUrl: 'html/myvoucheer.html'
	})
	.when('/myaccount',{
		controller: 'myaccountController',
		templateUrl: 'html/myaccount.html'
	})
	.when('/useredit',{
		controller: 'usereditController',
		templateUrl: 'html/useredit.html'
	})
	.otherwise({
		redirectTo: '/'
	});
});
