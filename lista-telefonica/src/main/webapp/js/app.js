angular.module("listaTelefonica", ['ngRoute', 'ui.bootstrap']);


angular.module("listaTelefonica").config(function($routeProvider) {
	$routeProvider.when('/listatelefonica', {templateUrl: 'view/listaTelefonica.html', controller:'listaTelefonicaCtrl'});
	$routeProvider.otherwise({redirectTo: '/listatelefonica'});
});
