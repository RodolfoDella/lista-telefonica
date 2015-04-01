angular.module("listaTelefonica").factory("listaTelefonicaFactory", function($http){
	var _getUrl = function(url){				
	return $http.get(url);
};
return {
		factory: _getUrl
	};
});