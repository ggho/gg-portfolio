/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

var ggPortfoControllers = angular.module('ggPorfoControllers', ['ngSanitize','smoothScroll']);

ggPortfoControllers.controller('ProjectListCtrl', ['$scope', '$http', '$location', 'smoothScroll',
	function($scope, $http, $location, smoothScroll) {
		$http.get('data/projects.json').success(function(data) {
			$scope.projects = data;

		});

		$scope.orderProp = "-endDate"; //newest
		$scope.filterProp = {};

		$scope.setFilterTag = function(tag) {
			if (!tag) {
				$scope.filterProp = {};
			}
			$scope.filterProp.tags = tag;
		};
		
		if($location.path() == '/projects'){
			//scroll to portfo
			var element = document.getElementById('portfolio');
			smoothScroll(element);
		}
		
		//scroll to portfo when model change
		
		
		//TODO: write a filter to filter @<orgName> to a linked proper name.

	}]);

ggPortfoControllers.controller('ProjectSummaryCtrl', ['$scope', '$http', '$stateParams', 'smoothScroll',
	function($scope, $http, $stateParams, smoothScroll) {
		$http.get('data/projects.json').success(function(data) {
			var projectId = $stateParams.projectId;

			for (var i = 0; i < data.length; i++) {
				if (data[i].id == projectId) {
					$scope.project = data[i];

					break;
				}
			}

			//scroll to summary
			var element = document.getElementById('summary');
			smoothScroll(element);

		});

	}]);

ggPortfoControllers.controller('ProjectDetailCtrl', ['$scope', '$stateParams',
	function($scope, $stateParams) {

		$scope.projectId = $stateParams.projectId;

	}]);