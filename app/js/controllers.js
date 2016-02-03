/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

var ggPortfoControllers = angular.module('ggPorfoControllers', ['ngSanitize']);

ggPortfoControllers.controller('ProjectListCtrl', ['$scope', '$http', '$stateParams',
	function($scope, $http, $stateParams) {
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

ggPortfoControllers.controller('ProjectSummaryCtrl', ['$scope', '$http', '$stateParams',
	function($scope, $http, $stateParams) {
		$http.get('data/projects.json').success(function(data) {
			var projectId = $stateParams.projectId;
			
			for(var i=0;i<data.length;i++){
				if(data[i].id == projectId){
					$scope.project = data[i];
					
					break;
				}
			}
			

		});

	}]);

ggPortfoControllers.controller('ProjectDetailCtrl', ['$scope', '$stateParams',
	function($scope, $stateParams) {
		
		$scope.projectId = $stateParams.projectId;

	}]);