angular.module("listaTelefonica").controller("listaTelefonicaCtrl", function($scope, $http, listaTelefonicaFactory) {
	
	// $scope.setores = [{value:1, label:"TI"},
	// 				  {value:2, label:"Coordenação"},
	// 				  {value:3, label:"Secretaria"},
	// 				  {value:4, label:"Tesouraria"}];
	

	// $scope.setoresSelecionado = $scope.setores[0];
	

	$scope.carregarDepartamento = function(){  /*usa o _ na variavel quando for variavel local*/

		listaTelefonicaFactory.factory("http://localhost:8080/phonelist/department").success(function (data,status){
			$scope.setores = data;
		});	
	};

	$scope.carregarDepartamento();

	$scope.contatos = [];

	$scope.adicionarContato = function(listaTelefonica) {
		$scope.contatos.push(angular.copy(listaTelefonica));
		delete $scope.listaTelefonica;	

		$scope.contatoForm.$setPristine();
	}

	$scope.removerContato = function(listaTelefonica) {
		var indice = $scope.contatos.indexOf(listaTelefonica);
		$scope.contatos.splice(indice, 1);
	}

});