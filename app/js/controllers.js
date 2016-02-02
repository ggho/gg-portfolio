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
		$scope.filterProp = {};
		
		$scope.setFilterTag = function(tag) {
			if(!tag){
				$scope.filterProp = {};
			}
      $scope.filterProp.tags = tag;
    };
		


	}]);

ggPortfoControllers.controller('ProjectDetailCtrl', ['$scope', '$stateParams',
	function($scope, $stateParams) {
		
		$scope.projectId = $stateParams.projectId;

	}]);