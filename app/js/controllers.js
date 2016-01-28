/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

var ggPortfoControllers = angular.module('ggPorfoControllers', []);

ggPortfoControllers.controller('ProjectListCtrl', ['$scope', '$http',
	function($scope, $http) {
		$http.get('data/projects.json').success(function(data) {
			$scope.projects = data;

		});
		
		$scope.orderProp = "-yyyymm"; //newest
		


	}]);

ggPortfoControllers.controller('ProjectDetailCtrl', ['$scope', '$routeParams',
	function($scope, $routeParams) {

		$scope.projectId = $routeParams.projectId;

	}]);